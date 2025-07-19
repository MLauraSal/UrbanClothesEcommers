const Banner = () => {
  return (
    <section className="mt-0 mb-8 mx-4 lg:my-4">
      <div className="flex overflow-x-auto rounded-md scroll-snap-x scroll-snap-mandatory overscroll-x-contain">
        <div className="relative min-w-full max-h-[450px] aspect-square lg:h-[500px] scroll-snap-align-start overflow-hidden rounded-md">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover object-center lg:object-center"
          >
            <source src="/assets/img/banner/young-male-model.mp4" />
          </video>

          <div className="absolute left-0 right-0 top-2/3 transform -translate-y-2/3 lg:left-20 lg:top-1/2 lg:-translate-y-1/2 ">
          <div className="mx-auto px-4 sm:px-6 lg:px-0 mt-[150px]">

              <p className="mb-5 text-xs lg:text-base font-medium leading-none text-white opacity-0 animate-fadeUpDelay1">
                SPRING COLLECTION
              </p>
              <h1 className="mb-3 text-white text-xl lg:text-4xl font-medium opacity-0 animate-fadeUpDelay2">
                End of
                <br />
                <span className="text-gray-500">Season Sale</span>
              </h1>
              <a
                href="shop-collection-sub.html"
                className="inline-flex items-center gap-2 border border-white text-white text-xs font-medium px-3 py-2 lg:px-7 lg:py-4 rounded hover:bg-white hover:text-neutral-900 transition-all duration-300 opacity-0 animate-fadeUpDelay3"
              >
                <span>Shop collection</span>
                <ion-icon
                  name="chevron-forward-outline"
                  class="text-sm lg:text-base"
                ></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
