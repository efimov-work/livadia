import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './guide.css';

export default function GuideLayout({ children }: { children: React.ReactNode }) {
    return (
        <div id="top" className="site guide">
            <a className="skip-link" href="#guide-main">К содержанию</a>
            <Header guide />
            {children}
            <Footer guide />
        </div>
    );
}
