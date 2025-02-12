export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
          <li class="text-xl">re1.pl</li>
          <li><a href="https://status.re1.pl/">statuspage</a></li>
          <li><a href="https://blog.re1.pl/">blog</a></li>
          <li><a href="https://github.re1.pl/" target="_blank" rel="noopener noreferrer">github</a></li>
          <li><a href="https://jenkins.re1.pl/">jenkins ci/cd admin</a></li>
          <li>contact email <a href="mailto:ntds@re1.pl">ntds@re1.pl</a></li>
          <li class="text-xl">lan users:</li>
            <li><a href="http://192.168.0.13:81/">proxy manager N#3</a></li>
            <li><a href="http://192.168.0.12:8080/">jenkins ci/cd local N#2</a></li>
            <li><a href="https://192.168.0.12:9443/">docker local N#2</a></li>
          <li>&copy; 2025</li>
        </ul>
      </main>
    </div>
  );
}

/* <li>Services connected to this domain are currently unavailable.</li>  */
