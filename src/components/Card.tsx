
export interface Props {
	title: string;
	body: string;
	href: string;
}

function Card({href, title, body}:Props) {
  return (
      <li className="link-card p-4 bg-slate-200 opacity-70">
          <a href={href}>
              <h2>
                  {title}
                  <span>&rarr;</span>
              </h2>
              <p>
                  {body}
              </p>
          </a>
      </li>
  )
}

export default Card