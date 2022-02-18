import Image from 'next/image';

const SideNote = (props) => {
    return (
        <div class="rounded-sm bg-gray-700 p-4 border-l-4 border-amber-700 prose mt-4">
            <div className="flex">
            <div class="flex-shrink-0 mt-8 mr-2">
                <Image src="/astronaut waving.png" height={50} width={50}  />
                </div>
            <div class="ml-3 pr-10">
                <p className="text-lg mb-3 font-bold text-slate-100">{props.title}</p>
                <p class="text-slate-100">{props.content}</p>
            </div>
        </div>
        </div>
        
    )
}

export default SideNote;