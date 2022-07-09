import Link from 'next/link'
import {MainLayout} from '../components/layout/MainLayout'

export default function HomePage() {
    return (
        <MainLayout>
            <h1>Homa Page</h1>
            <h1 className="title">
                ir Al About
                <Link href="/about">Ir About</Link>
            </h1>

            <p className="description">
                Get started by editing{' '}
                <code className="code">pages/index.js</code>
            </p>
        </MainLayout>
    )
}
