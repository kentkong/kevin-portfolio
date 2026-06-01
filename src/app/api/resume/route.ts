import { NextRequest, NextResponse } from "next/server";
import {
  notifyResumeRequest,
  parseResumeRequest,
  readResumePdf,
  ResumeAccessError,
} from "@/lib/resume-access";

export const runtime = "nodejs";

function getRequestMeta(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || undefined;

  return {
    ip,
    userAgent: request.headers.get("user-agent") ?? undefined,
    requestedAt: new Date().toISOString(),
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = parseResumeRequest(body);
    const meta = getRequestMeta(request);

    await notifyResumeRequest(payload, meta);

    const pdf = await readResumePdf();

    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Kevin-Mold-Resume.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof ResumeAccessError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    console.error("[resume] unexpected error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
