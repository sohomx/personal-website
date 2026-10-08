/** Inline boot script — applies saved theme before paint to avoid flash. */
export function ThemeInit() {
  const code = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');var h=localStorage.getItem('hand')==='1';if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark')}if(h){d.classList.add('hand')}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
