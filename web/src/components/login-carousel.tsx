import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel.tsx";
import {
  useEffect,
  useState
} from "react";
import { cn } from "@/lib/utils.ts";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { Badge } from "@/components/ui/badge.tsx";

const slides = [
  {
    title: "Plataforma de cursos completa",
    description: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum.",
    src: "/carousel_1.jpg",
    badges: [
        "Cursos"
    ]
  },
  {
    title: "Carousel 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: "/carousel_2.jpg",
    badges: [
        "Pet-friendly",
    ]
  },
  {
    title: "Carousel 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: "/carousel_3.jpg",
    badges: [
        "Inovador"
    ]
  }
]

export function LoginCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const count = api?.scrollSnapList().length || 0;

  const currentSlide = slides[currentIndex] || slides[0];

  return (
      <Carousel
          opts={{
            align: "center",
            loop: false
          }}
          className="relative size-full overflow-hidden"
          setApi={setApi}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <button className="absolute top-16 left-16 z-20 size-10 rounded-full border border-white">
          <FaChevronLeft className="size-full p-3" />
        </button>
        <div className="absolute flex flex-col gap-4 bottom-40 left-16 z-20 pr-24">
          <div className="flex gap-2">
            {currentSlide.badges.map((badge) => (
                <Badge className="text-lg w-fit font-medium">{badge}</Badge>
            ))}
          </div>
          <h1 className="text-white text-2xl font-bold">{currentSlide.title}</h1>
          <p className="text-neutral-400 text-xl">{currentSlide.description}</p>
        </div>
        <div className="absolute flex gap-2 bottom-16 left-16 z-20">
          {Array.from({ length: count }, (_, i) => i).map((i) => (
              // Adicionei este botão com tamanho diferente do que é visto na tela para facilitar o click do usuário;
              // Um botão com tamanho h-1 é muito pequeno e difícil de clicar.
              <button key={i} className="w-20 h-4" onClick={() => api?.scrollTo(i)}>
                <div
                    className={cn("w-20 h-1 rounded", i === currentIndex ? "bg-white" : "bg-neutral-700")}
                />
              </button>
          ))}
        </div>
        <div className="absolute flex gap-4 bottom-16 right-16 z-20">
          <button className={api?.canScrollPrev() ? "text-white" : "text-neutral-700 pointer-events-none"} onClick={() => api?.scrollPrev()}>
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button className={api?.canScrollNext() ? "text-white" : "text-neutral-700 pointer-events-none"}
                  onClick={() => api?.scrollNext()}
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
        <CarouselContent>
          {slides.map((slide) => (
              <CarouselItem className="pl-0">
                <img
                    className="size-full object-cover"
                    src={slide.src}
                    alt="Image"
                />
              </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  );
}
