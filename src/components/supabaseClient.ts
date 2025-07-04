import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojdgnxdlbohujvulpuao.supabase.co'
const supabaseKey = 'your-anon-public-key' // Replace with your actual anon/public key
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase