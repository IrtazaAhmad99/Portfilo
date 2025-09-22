import React from 'react'
import { motion } from "framer-motion"

const Bar = () => {
    return (
        <div className='flex justify-center bar'>
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "10rem", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="w-50 h-2 mt-1 mb-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee]" />
            </motion.div>
        </div>

    )
}

export default Bar