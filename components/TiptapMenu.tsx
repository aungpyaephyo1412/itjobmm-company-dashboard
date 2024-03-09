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
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    disabled={
                        !editor.can().chain().focus().toggleBulletList().run()
                    }
                    className={cn("p-1",editor.isActive('bulletList')  && "text-white font-bold bg-gray-600 rounded")}>
                    <List className='h-5 w-5'/>
                </button>
                <button type="button"
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleOrderedList().run()
                        }
                        className={cn("p-1",editor.isActive('orderList')  && "text-white font-bold bg-gray-600 rounded")}>
                    <ListOrdered />
                </button>
                <button
                    type="button"
                        onClick={() =>
                            editor.chain().focus().toggleBold().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleBold().run()
                        }
                        className={cn("p-1",editor.isActive('bold')  && "text-white font-bold bg-gray-600 rounded")}
                >
                    <Bold className='h-5 w-5'/>
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
                    className={cn("p-1",editor.isActive('italic')  && "text-white font-bold bg-gray-600 rounded")}
                >
                    <Italic className='h-5 w-5'/>
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
                    className={cn("p-1",editor.isActive('underline')  && "text-white font-bold bg-gray-600 rounded")}
                >
                    <Underline className='h-5 w-5'/>
                </button>
                <button
                    type="button"
                    onClick={setLink}
                    className={cn("p-1",editor.isActive('link')  && "text-white font-bold bg-gray-600 rounded")}
                >
                    <Link className='h-5 w-5'/>
                </button>
            </div>
            <div className='flex-center gap-3'>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({level: 3}).run()
                    }
                    className={cn("p-1",editor.isActive('heading', {level: 3})  && "text-white font-bold bg-gray-600 rounded")}
                >
                    <Heading1 className='h-6 w-6'/>
                </button>
                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({level: 4}).run()
                    }
                    className={cn("p-1",editor.isActive('heading', {level: 4})  && "text-white font-bold bg-gray-600 rounded")}
                >
                    <Heading2 className='h-6 w-6'/>
                </button>
            </div>
        </div>
    );
};

export default TiptapMenu;
