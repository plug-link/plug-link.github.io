<script lang="ts">
  interface Props {
    title: string;
    urlPath: string;
  }

  let { title, urlPath }: Props = $props();
  let copied = $state(false);
  let instaCopied = $state(false);

  const getFullUrl = () => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}${urlPath}`;
  };

  const shareToInstagram = async () => {
    const url = getFullUrl();
    try {
      await navigator.clipboard.writeText(url);
      instaCopied = true;
      setTimeout(() => {
        instaCopied = false;
        window.open('https://www.instagram.com', '_blank');
      }, 800);
    } catch {
      window.open('https://www.instagram.com', '_blank');
    }
  };

  const copyToClipboard = async () => {
    const url = getFullUrl();
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const platforms = [
    {
      name: '페이스북',
      paths: ['M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'],
      getShareUrl: (_t: string, u: string) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}`,
    },
    {
      name: '카카오톡',
      paths: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
      getShareUrl: (t: string, u: string) =>
        `https://sharer.kakao.com/talk/friends/picker/link?shareUrl=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}`,
    },
    {
      name: '링크드인',
      paths: [
        'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
        'M2 9h4v12H2z',
        'M4 6a2 2 0 1 0 0-4 2 2 0 1 0 0 4z',
      ],
      getShareUrl: (t: string, u: string) =>
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}`,
    },
  ];
</script>

<div class="flex flex-col gap-4 py-8 border-t border-border/50">
  <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
    Share this post
  </h3>

  <div class="flex items-center gap-2 flex-wrap">
    <!-- Instagram: 링크 복사 후 인스타 열기 -->
    <button
      onclick={shareToInstagram}
      class="p-2.5 rounded-xl border border-border hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-300 relative"
      aria-label="인스타그램에 공유"
      title={instaCopied ? '링크 복사됨!' : '인스타그램'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    </button>

    <!-- Facebook, KakaoTalk, LinkedIn -->
    {#each platforms as platform (platform.name)}
      <a
        href={platform.getShareUrl(title, getFullUrl())}
        target="_blank"
        rel="noopener noreferrer"
        class="p-2.5 rounded-xl border border-border hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-300"
        aria-label={`${platform.name}에 공유`}
        title={platform.name}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {#each platform.paths as d (d)}
            <path {d} />
          {/each}
        </svg>
      </a>
    {/each}

    <!-- Copy Link -->
    <button
      onclick={copyToClipboard}
      class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-300"
      aria-label="Copy link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
      <span class="text-xs font-bold uppercase tracking-widest">
        {copied ? 'Copied!' : 'Copy Link'}
      </span>
    </button>
  </div>
</div>
