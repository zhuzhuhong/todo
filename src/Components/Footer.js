import Link from './Link';
import React from 'react';
const Footer = () => (
    <ul>
        <Link filter="all">全部</Link>
        <Link filter="active">待办</Link>
        <Link filter="completed">已完成</Link>
        <Link></Link>
    </ul>
);

export default Footer;