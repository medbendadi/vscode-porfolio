import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import styles from '../styles/GithubPage.module.css';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('../components/CustomCursor'))
const RepoCard = dynamic(() => import('../components/RepoCard'))
const Meta = dynamic(() => import('../components/Meta'))



const theme = {
   level0: '#161B22',
   level1: '#0e4429',
   level2: '#006d32',
   level3: '#26a641',
   level4: '#39d353',
};

const github = ({ repos, user }) => {
   return (
      <>
         <Meta title='Github' />
         <CustomCursor />
         <div className={styles.user}>
            <div>
               <Image
                  src={user.avatar_url}
                  className={styles.avatar}
                  alt={user.login}
                  width={50}
                  height={50}
               />
               <h3 className={styles.username}>{user.login}</h3>
            </div>
            <div>
               <h3>{user.public_repos} repos</h3>
            </div>
            <div>
               <h3>{user.followers} followers</h3>
            </div>
         </div>
         <div className={styles.container}>
            {repos.map((repo) => (
               <RepoCard key={repo.id} repo={repo} />
            ))}
         </div>
         <div className={styles.contributions}>
            <GitHubCalendar
               username='medbendadi'
               theme={theme}
               hideColorLegend
               hideMonthLabels
            />
         </div>
      </>
   )
}

export async function getStaticProps() {
  try {
    // Fetch user data
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    // Check user response
    if (!userRes.ok) {
      console.error('❌ GitHub user fetch failed:', userRes.status, userRes.statusText);
      throw new Error(`GitHub user fetch failed: ${userRes.status}`);
    }

    const user = await userRes.json();

    // Fetch repositories
    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    // Check repo response
    if (!repoRes.ok) {
      console.error('❌ GitHub repo fetch failed:', repoRes.status, repoRes.statusText);
      throw new Error(`GitHub repo fetch failed: ${repoRes.status}`);
    }

    let repos = await repoRes.json();

    // Ensure repos is an array before sorting
    if (!Array.isArray(repos)) {
      console.error('❌ GitHub repos response is not an array:', repos);
      repos = [];
    } else {
      repos = repos
        .sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .slice(0, 6);
    }

    // ✅ Return valid props
    return {
      props: {
        title: 'GitHub',
        repos,
        user,
      },
      revalidate: 10,
    };
  } catch (error) {
    // Catch any network or parsing errors
    console.error('🔥 Error fetching GitHub data:', error);

    // ✅ Return fallback props instead of failing build
    return {
      props: {
        title: 'GitHub',
        repos: [],
        user: {},
      },
      revalidate: 10,
    };
  }
}



export default github
