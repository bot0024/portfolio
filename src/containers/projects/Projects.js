import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log("Starting to fetch profile.json...");
        
        const response = await fetch("/profile.json", {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin'
        });
        
        console.log("Fetch response:", {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries())
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Response data structure:", {
          hasData: !!data,
          hasUser: !!(data?.data?.user),
          hasPinnedItems: !!(data?.data?.user?.pinnedItems),
          hasEdges: !!(data?.data?.user?.pinnedItems?.edges),
          edgesLength: data?.data?.user?.pinnedItems?.edges?.length
        });
        
        if (data?.data?.user?.pinnedItems?.edges) {
          console.log("Setting repositories:", data.data.user.pinnedItems.edges);
          setrepo(data.data.user.pinnedItems.edges);
        } else {
          throw new Error("Invalid data structure in profile.json");
        }
      } catch (error) {
        console.error("Error in getRepoData:", error);
        setError(error.message);
        setrepo([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (openSource.display) {
      console.log("OpenSource section is enabled, fetching data...");
      getRepoData();
    } else {
      console.log("OpenSource section is disabled");
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    console.log("Rendering loading state");
    return renderLoader();
  }

  if (error) {
    console.error("Rendering error state:", error);
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          <p>Error loading projects: {error}</p>
        </div>
      </div>
    );
  }

  if (!openSource.display) {
    console.log("OpenSource section is disabled, rendering FailedLoading");
    return <FailedLoading />;
  }

  if (!Array.isArray(repo) || repo.length === 0) {
    console.error("No repositories found or invalid data:", repo);
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          <p>No projects found</p>
        </div>
      </div>
    );
  }

  console.log("Rendering repositories:", repo);
  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v?.node) {
              console.error(`Invalid repository data at index ${i}:`, v);
              return null;
            }
            return (
              <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
            );
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Suspense>
  );
}
