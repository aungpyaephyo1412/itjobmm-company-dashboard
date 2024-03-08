const TextEditorIcon = ({
    size = 16,
    width = 16,
    height = 24,
    className,
    ...props
}: {
    size?: number | string;
    width?: number | string;
    height?: number | string;
    className: string;
}) => (
    <svg
        className={className}
        aria-hidden='true'
        fill='currentColor'
        focusable='false'
        height={size || height}
        role='presentation'
        viewBox='0 0 16 7.9'
        width={size || width}
        {...props}
    >
        <path
            d='m2.7,0L0,7.9h1.1l.8-2.5h2.8l.8,2.5h1.1L3.9,0h-1.2Zm-.6,4.6l.8-2.3c.2-.5.3-1,.4-1.4h0c.1.5.2.9.4,1.4l.8,2.3h-2.4Z'
            fill='currentColor'
        />
        <path
            d='m15.6,7.1h-3.2c-.2,0-.4.2-.4.4s.2.4.4.4h3.2c.2,0,.4-.2.4-.4s-.2-.4-.4-.4Z'
            fill='currentColor'
        />
        <path
            d='m16,5.1c0-.2-.2-.4-.4-.4h-4.5c-.2,0-.4.2-.4.4s.2.4.4.4h4.5c.2,0,.4-.2.4-.4Z'
            fill='currentColor'
        />
        <path
            d='m16,2.8c0-.2-.2-.4-.4-.4h-6.3c-.2,0-.4.2-.4.4s.2.4.4.4h6.3c.2,0,.4-.2.4-.4Z'
            fill='currentColor'
        />
        <path
            d='m16,.4c0-.2-.2-.4-.4-.4H6.9c-.2,0-.4.2-.4.4s.2.4.4.4h8.7c.2,0,.4-.2.4-.4Z'
            fill='currentColor'
        />
    </svg>
);

export default TextEditorIcon;
