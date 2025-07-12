'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/app/components/Buttons/Button/Button';
import { LinkIcon } from '@/app/components/Icons/iconsDS';

interface HeadingWithCopyLinkProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    id?: string;
    children?: React.ReactNode;
    className?: string;
}

export const HeadingWithCopyLink: React.FC<HeadingWithCopyLinkProps> = ({
    level,
    id,
    children,
    className,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

    const copyAndJump = async () => {
        if (!id) return;

        const anchor = `#${id}`;
        try {
            await navigator.clipboard.writeText(anchor);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy link: ', err);
        }

        // Jump to the element
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', anchor);
        }
    };

    return (
        <HeadingTag
            id={id}
            className={cn("relative flex items-center gap-2 cursor-pointer group", className)}
            onClick={copyAndJump}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {id && (
                <Button
                    variant="r4-white"
                    className="size-4 shrink-0 hidden sm:inline-flex"
                    onClick={copyAndJump}
                >
                    {copied ? (
                        <LinkIcon size="md" />
                    ) : isHovered ? (
                        <LinkIcon size="md" />
                    ) : null}
                </Button>
            )}
        </HeadingTag>
    );
};