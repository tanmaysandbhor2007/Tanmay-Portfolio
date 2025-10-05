import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedModal() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-2xl p-3 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium shadow-lg hover:scale-[1.02] transition-transform"
      >
        Open Modal
      </button>

      <AnimatePresence>
        {open && (
          // backdrop
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* modal panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-[90%] max-w-lg bg-white rounded-2xl p-6 shadow-xl"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <h2 className="text-lg font-semibold mb-2">Animated Modal</h2>
              <p className="text-sm text-slate-600 mb-4">This modal uses Framer Motion for smooth opening and closing. It is styled to resemble shadcn/ui components.</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-sm"
                >
                  Close
                </button>
                <button
                  onClick={() => { alert('Action triggered!'); setOpen(false) }}
                  className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
