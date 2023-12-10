"use client"

import { motion } from 'framer-motion'  //animation library

export const MotionDiv = motion.div   //only this div will be client side rendered 
                                      // all of its children will be server side rendered