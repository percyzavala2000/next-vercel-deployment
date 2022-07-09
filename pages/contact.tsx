import Link from 'next/link';
import {MainLayout} from '../components/layout/MainLayout';

const contact = () => {
    return (
        <MainLayout   >
            <h1>Contact Page</h1>
            <h1 className="title">
                ir Al About
                <Link href="/">Ir Home</Link>
            </h1>

            <p className="description">
                Get started by editing{" "}
                <code className="code">pages/contact.jsx</code>
            </p>
        </MainLayout>
    )
}

export default contact