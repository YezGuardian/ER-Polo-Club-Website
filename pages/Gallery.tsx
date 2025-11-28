import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

// Define categories and their images
const categories = {
  all: 'All',
  action: 'Action',
  kego: 'Kego',
  highveld: 'Highveld Championship',
  diamond: 'Diamond League'
};

// Helper function to generate image paths from folder
const getImagesFromFolder = (folder: string, count: number) => {
  const images: string[] = [];

  if (folder === 'action') {
    const actionImages = [
      '469407807_18074502625621673_2236495285642152890_n.jpg',
      '469467741_18074502850621673_7231145346625027259_n.jpg',
      '474843740_9273362536104887_4999500558038363911_n.jpg',
      '474847455_9273362526104888_9063665192459626152_n.jpg',
      '474851719_9273362516104889_5554219346759990550_n.jpg',
      '474855850_9273362489438225_2890922642976220645_n.jpg',
      '474870707_9273362479438226_862286839118296500_n.jpg',
      '474875675_9273362499438224_5301774032216969171_n.jpg',
      '474882054_9273362746104866_5562160180104689968_n.jpg',
      '474885430_9273362679438206_3216837473745099411_n.jpg',
      '474895796_9273362756104865_3974137086135650755_n.jpg',
      '474899305_9273362962771511_8554980822056137209_n.jpg',
      '474913938_9273362529438221_2117779033371964803_n.jpg',
      '474929876_9273362592771548_3729164224013854702_n.jpg',
      '474954297_9273362519438222_3518693779915090826_n.jpg',
      '475054574_9273362609438213_8894368315228393372_n.jpg',
      '475071276_9273362636104877_2601036940523863589_n.jpg',
      '475074030_9273362946104846_2466887508269366090_n.jpg',
      '475082227_9273362482771559_6889035477464512673_n.jpg',
      '475096438_9273362689438205_3142846595222077296_n.jpg'
    ];
    return actionImages.map(img => `/action/${img}`);
  } else if (folder === 'kego') {
    const kegoImages = [
      '502979668_18118620316481365_728711036358537285_n.jpg',
      '503027324_18118621558481365_6716022408726684992_n.jpg',
      '503035518_18118620307481365_4752192808088718805_n.jpg',
      '503048303_18118628020481365_1573342133147434914_n.jpg',
      '503058440_18118628008481365_4894905587745280950_n.jpg',
      '503091936_18118626028481365_1940270681592919895_n.jpg',
      '503092171_18118626043481365_7138750231664533817_n.jpg',
      '503096689_18118627999481365_1853443996506523027_n.jpg',
      '503809253_18118626031481365_8481311916490937925_n.jpg',
      '503854764_18118626706481365_2551636921442987672_n.jpg',
      '503871260_18118621549481365_770598649888158454_n.jpg',
      '503897530_18118626034481365_7166466516751065280_n.jpg',
      '503928474_18118621540481365_8580456382203394511_n.jpg',
      '503944524_18118626718481365_2824690987437179004_n.jpg',
      '503948037_18118627990481365_5539649966155892414_n.jpg',
      '503952540_18118627969481365_7595716567757320805_n.jpg',
      '504346113_18118627981481365_5179838911668696115_n.jpg',
      '504634840_18118621567481365_3120514392834440142_n.jpg'
    ];
    return kegoImages.map(img => `/kego/${img}`);
  } else if (folder === 'diamond-league') {
    const diamondImages = [
      '362954180_988550088792165_6929397197343368899_n.jpg',
      '469407123_18074502877621673_3713038274305433315_n.jpg',
      '469407292_18074502562621673_7884847456071907477_n.jpg',
      '469407807_18074502625621673_2236495285642152890_n.jpg',
      '469423773_18074502724621673_1186568116776339436_n.jpg',
      '469432014_18074502808621673_2934274089784749566_n.jpg',
      '469467741_18074502850621673_7231145346625027259_n.jpg',
      '469468212_18074502829621673_262757855440903526_n.jpg',
      '469492468_18074502757621673_7914334925666402232_n.jpg',
      '469497552_18074502787621673_8215683930127088374_n.jpg',
      '469557459_18074502712621673_8387141500992306871_n.jpg',
      '469634653_18074502847621673_3361119457089782138_n.jpg',
      '469648553_18074502568621673_1859221988432197201_n.jpg',
      '472148928_1340681733578997_4581492989423493179_n.jpg',
      '472921030_1340681883578982_7007835208843271792_n.jpg',
      '473043073_1340681986912305_8723220333332138245_n.jpg',
      '473069788_1340681906912313_8915003173623334473_n.jpg',
      '473088576_1340678493579321_2495362216649124215_n.jpg',
      '473116161_1340681816912322_9037902516393914131_n.jpg',
      '473148318_1340681830245654_6942101090480224515_n.jpg'
    ];
    return diamondImages.map(img => `/diamond-league/${img}`);
  } else if (folder === 'highveld-championships') {
    const highveldImages = [
      '500438030_18117695743481365_1829282002445238327_n.jpg',
      '500605252_18117693511481365_2368466707814617956_n.jpg',
      '500700087_18117698686481365_8025483360148227074_n.jpg',
      '500830013_18117698668481365_7723192779684866357_n.jpg',
      '500846653_18117695761481365_4625664521433705931_n.jpg',
      '500914422_18117696703481365_7779280187203630526_n.jpg',
      '500925434_18117698656481365_3295151832550673802_n.jpg',
      '500997140_18117696682481365_3380243644791389733_n.jpg',
      '501082252_18117697399481365_4851730810905841999_n.jpg',
      '501169318_18117697387481365_6267383037771807995_n.jpg',
      '501267490_18117698647481365_6893905735397408480_n.jpg',
      '501297760_18117698677481365_3424767635769066228_n.jpg',
      '501358948_18117696694481365_5828277639262690295_n.jpg',
      '501574358_18117693520481365_8491198020042560042_n.jpg',
      '501589795_18117693529481365_3852634980882572260_n.jpg',
      '501644128_18117695734481365_5231432818700979481_n.jpg',
      '501853600_18117695758481365_7606821243224644563_n.jpg',
      '502050885_18117698695481365_3845596878858748008_n (1).jpg',
      '502050885_18117698695481365_384559687885874800g8_n.jpg'
    ];
    return highveldImages.map(img => `/highveld-championships/${img}`);
  }
  return images;
};

// Generate all images
const allImages = {
  action: getImagesFromFolder('action', 20),
  kego: getImagesFromFolder('kego', 18),
  diamond: getImagesFromFolder('diamond-league', 20),
  highveld: getImagesFromFolder('highveld-championships', 19)
};

const getAllImages = () => {
  return [
    ...allImages.action,
    ...allImages.kego,
    ...allImages.diamond,
    ...allImages.highveld
  ];
};

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('all');

  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return getAllImages();
    }
    return allImages[activeCategory as 'action' | 'kego' | 'diamond' | 'highveld'] || [];
  };

  const filteredImages = getFilteredImages();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Life on the Field.</h1>
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as keyof typeof categories)}
                className={`px-6 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === key
                    ? 'bg-[#2F3E32] text-white border-[#2F3E32] dark:bg-[#3B5341] dark:border-[#3B5341] scale-105'
                    : 'border-foreground/20 text-muted hover:text-foreground hover:border-foreground/40'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredImages.map((src, i) => (
              <motion.div
                key={`${activeCategory}-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.03,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="break-inside-avoid"
              >
                <div className="rounded-2xl overflow-hidden group relative">
                  <img
                    src={src}
                    alt={`${categories[activeCategory]} gallery item`}
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};