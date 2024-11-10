import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from 'react-bootstrap/Badge';

export default function Navigation() {
    return (
        <div className='shadow sticky-top p-2 mb-2 bg-danger'>
            <div className='d-flex justify-content-between mb-2 align-items-center'>
                <div className='d-flex align-items-center'>
                    <Link href='/' passHref legacyBehavior>
                        <a>
                            <Image src='/bilder/img5.png' alt='logo' width={150} height={100} />
                        </a>
                    </Link>
                </div>
                <div className='d-flex justify-content-between align-content-center'>
                    <Link href='/produkte' passHref legacyBehavior>
                        <a>
                            <h6>Produkte</h6>
                        </a>
                    </Link>
                    <Link href='/ueber-uns' passHref legacyBehavior>
                        <a>
                            <h6>Über uns</h6>
                        </a>
                    </Link>
                    <Link href='/kontakt' passHref legacyBehavior>
                        <a>
                            <h6>Kontakt</h6>
                        </a>
                    </Link>
                </div>
                <div className='d-flex align-items-center justify-content-end'>
                    <Link href='/warenkorb' passHref legacyBehavior>
                        <a>
                            <Image src='/bilder/pngegg.png' alt='warenkorb' width={40} height={40} />
                            <Badge pill bg='success' className='ms-2'>2</Badge>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}