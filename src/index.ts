import { drizzle } from 'drizzle-orm/pglite';
import express, { Request, Response } from 'express';
import * as dotenv from "dotenv";
import * as pg from 'drizzle-orm/pg-core';


const db = drizzle();
console.log('hi');