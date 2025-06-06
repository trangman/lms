# AML Compliance LMS

A Learning Management System for Anti-Money Laundering (AML) compliance training in Thailand's real estate industry. Built with Next.js, Tailwind CSS, and Supabase.

## Overview

This LMS app provides:
- **6 Mandatory Training Modules** covering AML/CTF laws, risk assessment, transaction reporting, customer identification, due diligence, and sanctions screening
- **Interactive Assessments** with 30+ questions, requiring 60% per subject and 70% overall to pass
- **Progress Tracking** with detailed analytics and completion status
- **AMLO Certification** generating Form Kor Sor 02 certificates
- **Modern UI** with responsive design and beautiful user experience

## Features

### Core LMS Features
- ✅ Dashboard with progress overview
- ✅ Course catalog with sequential unlock system
- ✅ Interactive assessments and quizzes
- ✅ Progress tracking and analytics
- ✅ Certificate management
- ✅ User profile management

### AML Compliance Specific
- ✅ 6 mandatory training modules as per AMLO requirements
- ✅ Form Kor Sor 02 certificate generation
- ✅ Progress tracking for compliance reporting
- ✅ Assessment scoring (60% per subject, 70% overall)
- ✅ Real estate industry focused content

### Technical Features
- ✅ Next.js 14 with App Router
- ✅ Tailwind CSS for styling
- ✅ TypeScript for type safety
- ✅ Supabase ready integration
- ✅ Responsive design
- ✅ Modern component architecture

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aml-lms-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
aml-lms-app/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard page
│   ├── courses/           # Course listing and details
│   ├── progress/          # Progress tracking
│   ├── certificates/      # Certificate management
│   └── profile/           # User profile
├── components/            # Reusable React components
│   ├── Layout.tsx         # Main layout with navigation
│   └── Assessment.tsx     # Quiz/assessment component
├── lib/                   # Utilities and configurations
│   ├── supabase.ts        # Supabase client and types
│   └── mockData.ts        # Sample data for development
├── public/                # Static assets
└── ...config files
```

## Training Modules

The system includes 6 mandatory AML training modules:

1. **Introduction to AML/CTF Laws** (1 hour)
   - Overview of AML/CTF framework
   - Key definitions and terminology
   - Legal obligations for real estate professionals

2. **Risk Assessment and Management** (1 hour)
   - Risk-based approach
   - Risk assessment methodologies
   - Risk mitigation strategies

3. **Transaction Reporting Procedures** (1 hour)
   - Reporting requirements and thresholds
   - Suspicious activity identification
   - AMLO reporting procedures

4. **Customer Identification Guidelines** (1 hour)
   - Customer identification requirements
   - Verification procedures
   - Documentation standards

5. **Customer Due Diligence and Record Keeping** (1 hour)
   - CDD procedures
   - Enhanced due diligence
   - Record retention requirements

6. **Sanctions Screening and Asset Freezing** (1 hour)
   - Sanctions list screening
   - Asset freezing procedures
   - Compliance monitoring

## Assessment System

- **Multi-choice questions** (30+ per assessment)
- **Passing requirements**: 60% per subject, 70% overall
- **Immediate feedback** with explanations
- **Retake capability** for failed assessments
- **Progress tracking** and score history

## Database Setup (Supabase)

### Required Tables

Create these tables in your Supabase project:

```sql
-- Users table
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text not null,
  company text not null,
  role text check (role in ('student', 'admin')) default 'student',
  created_at timestamp with time zone default now()
);

-- Courses table
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  duration_hours integer not null,
  order_number integer not null,
  is_published boolean default false,
  created_at timestamp with time zone default now()
);

-- Lessons table
create table lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id) on delete cascade,
  title text not null,
  content text not null,
  video_url text,
  duration_minutes integer not null,
  order_number integer not null,
  created_at timestamp with time zone default now()
);

-- User progress table
create table user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  course_id uuid references courses(id) on delete cascade,
  lesson_id uuid references lessons(id) on delete cascade,
  status text check (status in ('not_started', 'in_progress', 'completed')) default 'not_started',
  completion_percentage integer default 0,
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  created_at timestamp with time zone default now()
);

-- Assessments table
create table assessments (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id) on delete cascade,
  title text not null,
  passing_score integer not null,
  questions jsonb not null,
  created_at timestamp with time zone default now()
);

-- User assessments table
create table user_assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  assessment_id uuid references assessments(id) on delete cascade,
  score integer not null,
  passed boolean not null,
  answers jsonb not null,
  completed_at timestamp with time zone default now()
);
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Mock Data

The app includes comprehensive mock data in `lib/mockData.ts` for development:
- Sample courses with realistic AML content
- Assessment questions based on Thai AML regulations
- User progress tracking
- Certificate data

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
```

## Customization

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update `app/globals.css` for global styles
- Use the predefined CSS classes in components

### Content
- Update course content in `lib/mockData.ts`
- Modify assessment questions for specific requirements
- Customize company branding in components

### Features
- Add new pages in the `app/` directory
- Create reusable components in `components/`
- Extend Supabase types in `lib/supabase.ts`

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (ready to implement)
- **Deployment**: Vercel (recommended)

## License

This project is licensed under the MIT License.

## Support

For questions or support regarding AML compliance requirements in Thailand, consult with legal professionals familiar with AMLO regulations.

---

**Note**: This is a prototype application. For production use in actual AML compliance scenarios, ensure proper legal review and compliance with all applicable Thai regulations. 