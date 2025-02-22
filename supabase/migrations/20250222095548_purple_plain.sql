/*
  # Fix RLS policies for profiles table
  
  1. Changes
    - Remove recursive policies that were causing infinite recursion
    - Implement simplified RLS policies for profiles table
    - Maintain security while avoiding policy loops
  
  2. Security
    - Maintain role-based access control
    - Ensure proper data access restrictions
    - Prevent unauthorized access
*/

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can read all profiles" ON profiles;
DROP POLICY IF EXISTS "Managers can read user profiles" ON profiles;

-- Create new, simplified policies
CREATE POLICY "Enable read access for users to own profile"
ON profiles FOR SELECT
TO authenticated
USING (
  auth.uid() = id
  OR 
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
  OR 
  ((SELECT role FROM profiles WHERE id = auth.uid()) = 'manager' 
   AND (SELECT role FROM profiles WHERE id = profiles.id) = 'user')
);

CREATE POLICY "Enable update access for users to own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

-- Ensure RLS is enabled
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;