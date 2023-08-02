import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão geral</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Na NirnSoft, acreditamos que a combinação entre excelência técnica e foco no usuário é a chave para o sucesso. Utilizamos as mais recentes tecnologias e frameworks para criar aplicativos móveis e plataformas web que se destacam pela usabilidade, desempenho e design atraente.
            <br className="sm:block hidden" />
          Nossos serviços abrangem desde o desenvolvimento de aplicativos mobile nativos para iOS e Android, até a criação de soluções web escaláveis e seguras. Trabalhamos de forma ágil e colaborativa, garantindo entregas no prazo e resultados de alta qualidade.
            <br className="sm:block hidden" />
          Se você está em busca de uma equipe dedicada, experiente e comprometida em transformar suas ideias em realidade, a NirnSoft é a parceira ideal. Junte-se a nós e descubra como podemos impulsionar o crescimento e o sucesso do seu negócio por meio da tecnologia.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
