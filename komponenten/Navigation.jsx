
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from 'react-bootstrap/Badge';
import { Button, Card, CardText } from 'react-bootstrap';

export default function Navigation() {
    return (
        <div className='shadow sticky-top p-2 mb-2 bg-danger'>
            <div className='d-flex justify-content-between mb-2 align-items-center'>
                <div className='d-flex align-items-center'>
                    <Link href='/'>
                        <Image src='/bilder/img5.png' alt='logo' width={150} height={100} />
                    </Link>
                </div>
                <CardText>
                    <div >
                        <h1 className='text-white'>Ihr Schlüsselnotdienst | Rufen Sie uns an ! | Wir sind für sie da!</h1>
                        <p className='text-white'>Wir sind Ihr Schlüsselnotdienst in Ihrer Nähe. Wir helfen Ihnen schnell und zuverlässig. Rufen Sie uns an, wir sind 24/7 für Sie da.</p>
                        <div className='d-flex  mb-2 align-items-center'>
                            <Badge className='bg-danger text-white'>24/7</Badge>
                            <Badge className='bg-danger text-white'>365 Tage</Badge>
                            <Badge className='bg-danger text-white'>Soforthilfe</Badge>
                        </div>
                    </div>
                </CardText>
                <div className='d-flex justify-content-between align-content-center'>
                    <Link href='/produkte'>
                        <Button className='bg-danger text-white m-1'>
                            <h6 className='text-bg-danger m-1'>Produkte</h6>
                        </Button>
                    </Link>
                    <Link href='/ueber-uns'>
                        <Button className='bg-danger text-white m-1'>
                            <h6 className='text-bg-danger m-1'>Über uns</h6>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}