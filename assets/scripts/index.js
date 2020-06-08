marked.setOptions({
    breaks: true
})

const placeholder =
    `# Heading 1
## Heading 2
### Heading 3
  
\`\`\`
npm install
\`\`\`
  
I think you should use an
\`<addr>\` element here instead.
  
numbered list :
1. First item
1. Second item
1. Third item
1. Fourth item
  
I just love **REACT**.
![Tux, the Linux mascot](https://i.ytimg.com/vi/0d9HE0nu1Mw/hqdefault.jpg)
  
As Kanye West said:

> We're living the future so
> the present is our past.
  
Coded by: [Angga Ginanjar](https://supermenkw.github.io)
`

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Editor />
            </div>
        )
    }
}

const Header = () => (
    <div className="row">
        <div className="col-xs-12">
            <h1 className="text-center">Live Markdown Editor</h1>
            <hr />
            <h4 className="text-center">Coded by <a href="https://supermenkw.github.io" target="_blank">Angga Ginanjar</a></h4>
        </div>
    </div>
)

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder
        }
    }

    updatePreview(event) {
        this.setState({
            markdown: event.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center">Editor</h3>
                    <textarea type="text" className="md-input" value={this.state.markdown} onChange={this.updatePreview.bind(this)} id="editor" />
                </div>
                <div className="col-md-6">
                    <h3 className="text-center">Preview</h3>
                    <Preview markdown={this.state.markdown} />
                </div>
            </div>
        )
    }
}

class Preview extends React.Component {
    createMarkup() {
        return { __html: marked(this.props.markdown) }
    }

    render() {
        return (
            <div className="well" dangerouslySetInnerHTML={this.createMarkup()} id="preview">
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));