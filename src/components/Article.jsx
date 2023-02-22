export default function Article({ url, imgSrc, imgAlt, date, title, description, author }) {
  return (
    <article className="grid grid-cols-5 gap-4 bg-teal-900 p-4 rounded-xl">
      <a className="col-span-5 sm:col-span-2" href={url}>
        <img src={imgSrc} alt={imgAlt} className="rounded-lg w-auto h-auto max-w-full max-h-full" />
      </a>
      <div className="flex flex-col gap-1 col-span-5 sm:col-span-3">
        <a href={url} className="text-teal-400 hover:underline">
          <h4 className="text-xl font-bold">{title}</h4>
        </a>
        <h5 className="text-lg">By {author}</h5>
        <h6 className="text-lg">{date}</h6>
        <p className="text-base">{description}</p>
      </div>
    </article>
  )
}