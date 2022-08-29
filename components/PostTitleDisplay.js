import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react'
import Meta from './Meta';
const prism = require("prismjs")
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SideNote from './SideNote'
import Markdown from 'markdown-to-jsx';
import PostContentDisplay from './PostContent';

const PostTitleDisplay = (props, children) => {

    useEffect(() => {
        prism.highlightAll();
      }, []);

    return (
             <>
             <Meta title={props.title || ''} description={props.description || ''} image={props.image || ''} />
                <article className=" mx-auto max-w-screen-md text-neutral-300" >
                  <div className="border-b-2 mb-4 text-slate-100 pb-5 md:ml-0 mr-0">
                    <h1 className="text-left text-4xl mt-2 decoration-4 font-bold mb-2 w-3/4">{props.title || ''}</h1>
                    <div className="text-xs text-slate-400">Published: {props.date.slice(0,10)}</div>
                  </div>
                  <PostContentDisplay content={props.content} />
                </article>
              </>
    )
} 

export default PostTitleDisplay;
