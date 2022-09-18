import {useRef, useEffect, useState} from 'preact/hooks';


export default function FadeInSection(props: any) {
	const [elementInView, setElementInView] = useState(true);
	const domRef = useRef() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		console.log("myref", domRef.current);
	  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => setElementInView(entry.isIntersecting));
	  });
	  observer.observe(domRef.current);

	  return () => observer.unobserve(domRef.current);
	}, []);


	return (	
		
	  <div
		style={ elementInView ? 
			{opacity: 1, transition: "all 1s"} : 
			{opacity: 0, transform: "translateX(-100%", filter: "blur(5px)"} }
		ref={domRef}
	  >
		{props.children}
	  </div>
	);
  }