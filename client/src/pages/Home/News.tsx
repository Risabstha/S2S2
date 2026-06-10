import NewsCard from "../../components/client/NewsCard";
import { MultiCarousel } from "../../components/client/MultiCarousel";
import { NEWS_ITEMS } from "../../assets/Data/NewsDetail";

const News = () => {
  return (
    <div
      className={` w-full flex justify-center items-center pt-30 md:pt-50 md:pb-30 pb-20 `}
    >
      <div className="w-full max-w-[100rem] bg-[#ebe9e3] flex flex-col">
        {/* Header */}
        <div className={`flex items-center justify-between  px-6  mb-15`}>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-[#C18374] playfairDisplayDiv">News & Updates</h1>
        </div>

        <MultiCarousel>
          {NEWS_ITEMS.map((news) => (
            <NewsCard key={news.id} item={news} />
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
};

export default News;
