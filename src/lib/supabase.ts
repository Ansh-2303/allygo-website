import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mevjtlofvmvdxadncojp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ldmp0bG9mdm12ZHhhZG5jb2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyNzg0MTYsImV4cCI6MjA5Mjg1NDQxNn0.LPpVj7t-nnvYR2hETMTXEXk4xNGqZC6NXjOgIMbuDE8';

export const supabase = createClient(supabaseUrl, supabaseKey);