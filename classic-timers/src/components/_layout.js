import { Analytics } from "@vercel/analytics/react"
export default function Layout({ children }) {
    return (
        <>
            <Analytics />
            <main className="mt-5">{children}</main>
        </>
    )
}