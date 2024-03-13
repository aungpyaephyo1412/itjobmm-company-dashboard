import React from 'react';
import {
    Bold,
    Italic,
    Underline,
    Link,
    Heading1,
    Heading2, List, ListOrdered,
} from 'lucide-react';

import {useCallback} from 'react';
import {type Editor} from '@tiptap/react';
import {cn} from "@nextui-org/react";

const TiptapMenu = ({editor}: { editor: Editor | null }) => {
    const setLink = useCallback(() => {
        const {view, state} = editor as Editor;
        const {from, to} = view.state.selection;
        const text = state.doc.textBetween(from, to, '\n');

        editor!
            .chain()
            .focus()
            .toggleLink({href: 'https://' + text, target: '_blank'})
            .run();
    }, [editor]);

    if (!editor) return null;

    return (
        <div className='flex justify-between items-center h-14 w-full gap-1 px-3 shadow rounded-t-lg'>
            <div className='flex justify-start items-center gap-4'>
                <button type="button"
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleOrderedList().run()
                        }
                        className={cn("p-1 hover:bg-cyan-300/50 rounded", editor.isActive('orderedList') && "text-blue-500 font-bold bg-cyan-300/50 rounded")}>
                    <ListOrdered className='h-4 w-4'/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    disabled={
                        !editor.can().chain().focus().toggleBulletList().run()
                    }
                    className={cn("p-1 hover:bg-cyan-300/50 rounded", editor.isActive('bulletList') && "text-blue-500 font-bold bg-cyan-300/50 rounded")}>
                    <List className='h-4 w-4'/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBold().run()
                    }
                    disabled={
                        !editor.can().chain().focus().toggleBold().run()
                    }
                    className={cn("p-1 hover:bg-cyan-300/50 rounded", editor.isActive('bold') && "text-blue-500 font-bold bg-cyan-300/50 rounded")}
                >
                    <Bold className='h-4 w-4'/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleItalic().run()
                    }
                    disabled={
                        !editor
                            .can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={cn("p-1 hover:bg-cyan-300/50 rounded", editor.isActive('italic') && "text-blue-500 font-bold bg-cyan-300/50 rounded")}
                >
                    <Italic className='h-4 w-4'/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                    }
                    disabled={
                        !editor
                            .can()
                            .chain()
                            .focus()
                            .toggleUnderline()
                            .run()
                    }
                    className={cn("p-1 hover:bg-cyan-300/50 rounded", editor.isActive('underline') && "text-blue-500 font-bold bg-cyan-300/50 rounded")}
                >
                    <Underline className='h-4 w-4'/>
                </button>
                <button
                    type="button"
                    onClick={setLink}
                    className={cn("p-1 hover:bg-cyan-300/50 rounded", editor.isActive('link') && "text-blue-500 font-bold bg-cyan-300/50 rounded")}
                >
                    <Link className='h-4 w-4'/>
                </button>
            </div>
            <div className='flex-center gap-3'>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({level: 3}).run()
                    }
                    className={cn("p-1 hover:bg-cyan-300/50 rounded", editor.isActive('heading', {level: 3}) && "text-blue-500 font-bold bg-cyan-300/50 rounded")}
                >
                    <Heading1 className='h-4 w-4'/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({level: 4}).run()
                    }
                    className={cn("p-1 hover:bg-cyan-300/50 rounded",editor.isActive('heading', {level: 4})  && "text-blue-500 font-bold bg-cyan-300/50 rounded")}
                >
                    <Heading2 className='h-4 w-4'/>
                </button>
            </div>
        </div>
    );
};

export default TiptapMenu;
