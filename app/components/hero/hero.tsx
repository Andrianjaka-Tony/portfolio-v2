export function Hero() {
  return (
    <section className="h-screen w-screen px-10 py-6 flex flex-col justify-between">
      <div></div>
      <div className="flex items-center">
        <div className="flex w-full">
          <div className="w-1/2 flex justify-between items-end">
            <p className="translate-y-0.5">@andrianjaka.tony</p>
            <p className="font-playfair text-2xl">Creative developer</p>
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <p className="translate-y-0.5">Scroll down</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="font-playfair text-2xl">Let's create something amazing together.</p>
        <p>Get in touch</p>
      </div>
    </section>
  );
}
