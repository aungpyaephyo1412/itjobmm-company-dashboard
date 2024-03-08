'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import TiptapImage from '@tiptap/extension-image';
import TiptapUnderline from '@tiptap/extension-underline';
import TiptapLink from '@tiptap/extension-link';
import TiptapMenu from './TiptapMenu';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';

const Tiptap = ({onChange,initialContent}:{onChange : (b:string)=>void,initialContent?:string}) => {

    const extensions = [
        StarterKit,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        TiptapImage,
        TiptapUnderline,
        TiptapLink.configure({
            protocols: ['https'],
            HTMLAttributes: {
                // Change rel to different value
                // Allow search engines to follow links(remove nofollow)
                rel: 'nofollow',
            },
        }),
        FontFamily.configure({
            types: ['textStyle'],
        }),
        TextStyle,
    ];

    const editorProps = {
        attributes: {
            class: 'prose prose-a:underline prose-a:underline-offset-2',
        },
    };

    const editor = useEditor({
        extensions,
        content: initialContent || "",
        editorProps,
        onUpdate: ({ editor }) => {
            const newContent = editor.getHTML();
            onChange(newContent)
        },
    });
    return (
        <div>
            <EditorContent editor={editor} />
            <TiptapMenu editor={editor} />
        </div>
    );
};

export default Tiptap;
