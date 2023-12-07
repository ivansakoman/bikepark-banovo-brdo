import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  const springConfig = {
    type: "spring",
    mass: 3,
    stiffness: 100,
    damping: 10,
  };

  return (
    <motion.header className="header">
      <motion.div
        whileHover={{ rotate: 5 }}
        transition={{ ...springConfig }}
        className="header__item"
        initial={{ y: "-150%" }}
        animate={{ y: 0, transition: { delay: 1 } }}
      >
        <NavLink to={"/"}>Home</NavLink>
      </motion.div>
      <motion.div
        whileHover={{ rotate: -5 }}
        transition={{ ...springConfig }}
        className="header__item"
        initial={{ y: "-150%" }}
        animate={{ y: 0, transition: { delay: 1.2 } }}
      >
        <NavLink to={"/track"}>Staze</NavLink>
      </motion.div>
      <motion.div
        whileHover={{ rotate: 7 }}
        transition={{ ...springConfig }}
        className="header__item"
        initial={{ y: "-150%" }}
        animate={{ y: 0, transition: { delay: 1.4 } }}
      >
        <NavLink to={"/about"}>O nama</NavLink>
      </motion.div>
      <motion.div
        whileHover={{ rotate: -3 }}
        transition={{ ...springConfig }}
        className="header__item"
        initial={{ y: "-150%" }}
        animate={{ y: 0, transition: { delay: 1.6 } }}
      >
        <NavLink to={"/contact"}>Kontakt</NavLink>
      </motion.div>
    </motion.header>
  );
};
export default Header;
