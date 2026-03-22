CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA public;
-- CreateEnum
CREATE TYPE "MaterialType" AS ENUM ('PDF', 'MARKDOWN', 'TEXT');

-- CreateEnum
CREATE TYPE "MaterialStatus" AS ENUM ('UPLOADING', 'PARSING', 'READY', 'FAILED');

-- CreateEnum
CREATE TYPE "PlanStatus" AS ENUM ('DRAFT', 'ACTIVE', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('LEARN', 'REVIEW', 'REINFORCE', 'QUIZ');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE', 'SKIPPED', 'OVERDUE');

-- CreateEnum
CREATE TYPE "SessionStatus" AS ENUM ('STARTED', 'COMPLETED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "QuizStatus" AS ENUM ('GENERATED', 'SUBMITTED', 'GRADED');

-- CreateEnum
CREATE TYPE "ReviewResult" AS ENUM ('POOR', 'FAIR', 'GOOD', 'EXCELLENT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "goal" TEXT,
    "examDate" TIMESTAMP(3),
    "dailyTimeBudget" INTEGER,
    "mode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "MaterialType" NOT NULL,
    "sourcePath" TEXT,
    "rawText" TEXT,
    "status" "MaterialStatus" NOT NULL DEFAULT 'UPLOADING',
    "parseError" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialChunk" (
    "id" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "chunkIndex" INTEGER NOT NULL,
    "title" TEXT,
    "content" TEXT NOT NULL,
    "summary" TEXT,
    "sourcePage" INTEGER,
    "sourceSection" TEXT,
    "metadata" JSONB,
    "embedding" vector,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MaterialChunk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KnowledgeUnit" (
    "id" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "topic" TEXT,
    "difficulty" INTEGER,
    "importance" INTEGER,
    "estimatedMinutes" INTEGER,
    "prerequisiteIds" TEXT[],
    "sourceRefs" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KnowledgeUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyPlan" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "status" "PlanStatus" NOT NULL DEFAULT 'DRAFT',
    "config" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "studyPlanId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "taskType" "TaskType" NOT NULL,
    "status" "TaskStatus" NOT NULL DEFAULT 'TODO',
    "scheduledDate" TIMESTAMP(3) NOT NULL,
    "estimatedMinutes" INTEGER,
    "difficulty" INTEGER,
    "priority" INTEGER,
    "masteryScore" DOUBLE PRECISION,
    "nextReviewDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskKnowledgeUnit" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "knowledgeUnitId" TEXT NOT NULL,

    CONSTRAINT "TaskKnowledgeUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearningSession" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "durationSeconds" INTEGER,
    "questionCount" INTEGER NOT NULL DEFAULT 0,
    "status" "SessionStatus" NOT NULL DEFAULT 'STARTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LearningSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isImportant" BOOLEAN NOT NULL DEFAULT false,
    "isConfusing" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "title" TEXT,
    "status" "QuizStatus" NOT NULL DEFAULT 'GENERATED',
    "score" DOUBLE PRECISION,
    "feedback" JSONB,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" TIMESTAMP(3),
    "gradedAt" TIMESTAMP(3),

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizAnswer" (
    "id" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "questionIndex" INTEGER NOT NULL,
    "questionType" TEXT NOT NULL,
    "questionText" TEXT NOT NULL,
    "referenceAnswer" TEXT,
    "userAnswer" TEXT,
    "isCorrect" BOOLEAN,
    "score" DOUBLE PRECISION,
    "analysis" TEXT,
    "errorType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuizAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewRecord" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "reviewDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "result" "ReviewResult" NOT NULL,
    "score" DOUBLE PRECISION,
    "intervalDays" INTEGER,
    "nextReviewDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReviewRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Project_userId_idx" ON "Project"("userId");

-- CreateIndex
CREATE INDEX "Material_projectId_idx" ON "Material"("projectId");

-- CreateIndex
CREATE INDEX "Material_status_idx" ON "Material"("status");

-- CreateIndex
CREATE INDEX "MaterialChunk_materialId_idx" ON "MaterialChunk"("materialId");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialChunk_materialId_chunkIndex_key" ON "MaterialChunk"("materialId", "chunkIndex");

-- CreateIndex
CREATE INDEX "KnowledgeUnit_materialId_idx" ON "KnowledgeUnit"("materialId");

-- CreateIndex
CREATE INDEX "KnowledgeUnit_topic_idx" ON "KnowledgeUnit"("topic");

-- CreateIndex
CREATE INDEX "StudyPlan_projectId_idx" ON "StudyPlan"("projectId");

-- CreateIndex
CREATE INDEX "StudyPlan_status_idx" ON "StudyPlan"("status");

-- CreateIndex
CREATE INDEX "Task_studyPlanId_idx" ON "Task"("studyPlanId");

-- CreateIndex
CREATE INDEX "Task_scheduledDate_idx" ON "Task"("scheduledDate");

-- CreateIndex
CREATE INDEX "Task_status_idx" ON "Task"("status");

-- CreateIndex
CREATE INDEX "Task_taskType_idx" ON "Task"("taskType");

-- CreateIndex
CREATE INDEX "Task_nextReviewDate_idx" ON "Task"("nextReviewDate");

-- CreateIndex
CREATE INDEX "TaskKnowledgeUnit_knowledgeUnitId_idx" ON "TaskKnowledgeUnit"("knowledgeUnitId");

-- CreateIndex
CREATE UNIQUE INDEX "TaskKnowledgeUnit_taskId_knowledgeUnitId_key" ON "TaskKnowledgeUnit"("taskId", "knowledgeUnitId");

-- CreateIndex
CREATE INDEX "LearningSession_taskId_idx" ON "LearningSession"("taskId");

-- CreateIndex
CREATE INDEX "LearningSession_status_idx" ON "LearningSession"("status");

-- CreateIndex
CREATE INDEX "Note_taskId_idx" ON "Note"("taskId");

-- CreateIndex
CREATE INDEX "Quiz_taskId_idx" ON "Quiz"("taskId");

-- CreateIndex
CREATE INDEX "Quiz_status_idx" ON "Quiz"("status");

-- CreateIndex
CREATE INDEX "QuizAnswer_quizId_idx" ON "QuizAnswer"("quizId");

-- CreateIndex
CREATE UNIQUE INDEX "QuizAnswer_quizId_questionIndex_key" ON "QuizAnswer"("quizId", "questionIndex");

-- CreateIndex
CREATE INDEX "ReviewRecord_taskId_idx" ON "ReviewRecord"("taskId");

-- CreateIndex
CREATE INDEX "ReviewRecord_reviewDate_idx" ON "ReviewRecord"("reviewDate");

-- CreateIndex
CREATE INDEX "ReviewRecord_nextReviewDate_idx" ON "ReviewRecord"("nextReviewDate");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialChunk" ADD CONSTRAINT "MaterialChunk_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KnowledgeUnit" ADD CONSTRAINT "KnowledgeUnit_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyPlan" ADD CONSTRAINT "StudyPlan_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_studyPlanId_fkey" FOREIGN KEY ("studyPlanId") REFERENCES "StudyPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskKnowledgeUnit" ADD CONSTRAINT "TaskKnowledgeUnit_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskKnowledgeUnit" ADD CONSTRAINT "TaskKnowledgeUnit_knowledgeUnitId_fkey" FOREIGN KEY ("knowledgeUnitId") REFERENCES "KnowledgeUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LearningSession" ADD CONSTRAINT "LearningSession_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizAnswer" ADD CONSTRAINT "QuizAnswer_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewRecord" ADD CONSTRAINT "ReviewRecord_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
