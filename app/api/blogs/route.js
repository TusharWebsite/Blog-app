import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('Blog_data');
    
    const blogs = await db.collection('blogs').find({}).toArray();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}