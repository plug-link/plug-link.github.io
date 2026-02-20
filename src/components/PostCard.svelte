<script lang="ts">
  import { formatDate } from '@/lib/utils/date';
  import { getLangFlag } from '@/lib/utils/lang';

  interface Props {
    post: {
      id: string;
      body?: string;
      data: {
        title: string;
        description: string;
        pubDate: Date;
        tags: string[];
        featured?: boolean;
        draft?: boolean;
        lang?: string;
      };
    };
    readTime: string;
    slug: string;
  }

  let { post, readTime, slug }: Props = $props();
</script>

<article class="group relative -mx-2 px-2">
  <a
    href={`/posts/${slug}`}
    class="block px-4 py-5 rounded-xl hover:bg-accent/50 transition-all duration-200 no-underline"
  >
    <div class="flex flex-col gap-2">
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            {#each post.data.tags.slice(0, 2) as tag (tag)}
              <span class="text-xs font-medium text-[#0066ff] dark:text-[#3d8bff]">
                {tag}
              </span>
            {/each}
            {#if post.data.featured}
              <span
                class="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </span>
            {/if}
            {#if post.data.draft}
              <span
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              >
                Draft
              </span>
            {/if}
          </div>
          <h2
            class="text-base sm:text-lg font-bold tracking-tight leading-snug text-[var(--color-foreground)] group-hover:text-[#0066ff] dark:group-hover:text-[#3d8bff] transition-colors"
          >
            {post.data.title}
          </h2>
          <p
            class="text-sm text-[var(--color-muted-foreground)] leading-relaxed mt-1.5 line-clamp-2 max-w-xl"
          >
            {post.data.description}
          </p>
        </div>
        <div
          class="flex items-center gap-3 text-xs text-[var(--color-muted-foreground)] sm:shrink-0 sm:pt-7"
        >
          <time datetime={post.data.pubDate.toISOString()} class="tabular-nums">
            {formatDate(post.data.pubDate)}
          </time>
          <span class="text-[var(--color-border)]">·</span>
          <span>{readTime}</span>
          {#if post.data.lang && post.data.lang !== 'en'}
            <span class="text-[var(--color-border)]">·</span>
            <span class="text-sm leading-none" title={`Language: ${post.data.lang}`}>
              {getLangFlag(post.data.lang)}
            </span>
          {/if}
        </div>
      </div>
    </div>
  </a>
</article>
