import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

import { styles } from '../styles';
import '../index.css';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Leandro Amaral
          </h4>

          <p className="{styles.sectionSubText}">
            © Copyright 2023-2024 Leandro Amaral. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);
export default SectionWrapper(Footer, '');
