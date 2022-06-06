import Head from "next/head";
import Image from "next/image";

export default function Contact() {
    return (
        // A Contact page with socials in the middle
        <div className="m-10">
            <Head>
                <title>Contact</title>
            </Head>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-10 justify-items-center">
                <a
                    href="https://www.linkedin.com/in/vito-van-hecke-b6646317b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/images/linkedin.png" alt="linkedin" className="w-32 h-32" width="125" height="125" />
                </a>
                <a href="https://github.com/vito-vanhecke" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/github.svg" alt="github" className="w-32 h-32" width="125" height="125" />
                </a>
                <a href="https://twitter.com/vitovanhecke" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/twitter.png" alt="twitter" className="w-32 h-32" width="125" height="125" />
                </a>
                <a href="https://www.instagram.com/vitovanhecke/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/instagram.png" alt="instagram" className="w-32 h-32" width="125" height="125" />
                </a>
                <a href="https://www.facebook.com/vito.vanhecke" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/facebook.png" alt="facebook" className="w-32 h-32" width="125" height="125" />
                </a>
                <a href="mailto:vito.vanhecke.developer@gmail.com">
                    <Image src="/images/email.png" alt="email" className="w-32 h-32" width="125" height="125" />
                </a>
            </div>
        </div>
    );
}
