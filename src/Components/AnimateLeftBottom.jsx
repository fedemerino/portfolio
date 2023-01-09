import React from 'react'
import { motion } from 'framer-motion'
const AnimateLeftBottom = ({children}) => {
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -100 }
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .7 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimateLeftBottom