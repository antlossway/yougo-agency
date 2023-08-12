# agency portal to promote new life in Southeast Asia

## Tech tools
- next.js
- typescript
- tailwindcss
- wordpress (as headless CMS)

## What I learned

### next.js dynamic routing page.js props

[https://nextjs.org/docs/app/api-reference/file-conventions/page](https://nextjs.org/docs/app/api-reference/file-conventions/page)

- params
eg. /src/app/countries/[countryName]/page.ts
URL: /countries/thailand
params: { countryName: 'thailand'}

```js
  const CountryInfo = async({params}: { params: {countryName: string} }) => {
    const {countryName} = params
  }
```


- searchParams


### hero section images slider (carousel) 

eg. there are 3 images
- option1:  use button to manually iterate all images
1) main container has w-100vw, inside container has w-300vw (overflow) 
2) useState with current slide number: [currentSlide, setCurrentSlide]
3) button to set current slide number
4) the inside container will translateX based on the current slide number

```js
    const sliderWidth = `w-[${numOfSlide * 100}vw]`;
  return (
    <div
      className=" h-[calc(100vh-4rem)] w-screen
    relative"
    >
      <div
        className={`${sliderWidth} h-full flex
        transition-all duration-500 ease-in-out `}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {heroSlider.map((item) => (
          <div key={item.id} className="h-full">
            <SliderItem {...item} />
          </div>
        ))}
      </div>
  ...
```

- option2: use useEffect to automatically iterate all images

- option3: use framer motion (tobe implemented) 
the problem of translateX is that the transition is too harsh, use framer motion to give fade-in fade-out effect

### shadcn-ui 
### installation and configuration

[https://ui.shadcn.com/docs/installation/next](https://ui.shadcn.com/docs/installation/next)

```
npx shadcn-ui@latest init
npx shadcn-ui@latest add navigation-menu

```

### Typescript

The returned result for ACF(Advanced custom field) is a object.
Object.entries() will convert it to an array of array, and each array contain 2 string field.
```
const res = await myAxios.get(`/countries?${query}`);
const data = res.data;
const infos: [string, string][] = Object.entries(data[0].acf);
```
