import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Skeleton } from './UI/Base';
import { Github, Star, GitFork, Activity } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export const GitHubStats = ({ username = "ubaid-ahmad" }: { username?: string }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <section className="section-padding bg-[var(--bg-section)]/50 border-y border-[#1E2128]/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Github size={14} className="text-[#3B82F6]" />
              <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-[0.3em]">Open Source</span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold uppercase tracking-tight">GitHub Activity</h2>
          </div>
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#64748B] hover:text-[#3B82F6] transition-colors"
          >
            Follow @{username} <Activity size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/[0.01] h-[140px] flex flex-col justify-between">
                <div>
                  <Skeleton className="h-4 w-2/3 mb-2" />
                  <Skeleton className="h-3 w-full mb-1" />
                  <Skeleton className="h-3 w-4/5" />
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#1E2128]/50">
                  <Skeleton className="h-2 w-10" />
                  <div className="flex gap-2">
                    <Skeleton className="h-2 w-6" />
                    <Skeleton className="h-2 w-6" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl glass-card flex flex-col justify-between h-full group"
              >
                <div>
                  <h3 className="text-[13px] font-bold mb-1 group-hover:text-[#3B82F6] transition-colors truncate uppercase tracking-tight">{repo.name}</h3>
                  <p className="text-[#64748B] text-[11px] leading-relaxed line-clamp-2 mb-3">
                    {repo.description || "No description provided."}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#1E2128]/50">
                  <span className="text-[8px] font-mono text-[#3B82F6] uppercase font-black">{repo.language || "Unknown"}</span>
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <span className="flex items-center gap-1 text-[8px] font-bold">
                      <Star size={9} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-[8px] font-bold">
                      <GitFork size={9} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))
          )}
        </div>
      </Container>
    </section>
  );
};
