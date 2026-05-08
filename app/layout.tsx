import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "전공나침반 | 신입생 진로 성향 검사",
  description: "대학교 신입생의 전공 선택 불안을 줄이기 위한 AI 기반 진로 탐색 플랫폼"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
