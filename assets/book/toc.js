// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="overview.html"><strong aria-hidden="true">1.</strong> Overview</a></li><li class="chapter-item expanded "><a href="intro/main.html"><strong aria-hidden="true">2.</strong> Introduction</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="intro/motivation.html"><strong aria-hidden="true">2.1.</strong> Motivation</a></li><li class="chapter-item expanded "><a href="intro/networks.html"><strong aria-hidden="true">2.2.</strong> Tensor Networks</a></li><li class="chapter-item expanded "><a href="intro/summary.html"><strong aria-hidden="true">2.3.</strong> Summary</a></li></ol></li><li class="chapter-item expanded "><a href="architecture/main.html"><strong aria-hidden="true">3.</strong> Architectures</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="architecture/mlp.html"><strong aria-hidden="true">3.1.</strong> MLPs</a></li><li class="chapter-item expanded "><a href="architecture/sequences.html"><strong aria-hidden="true">3.2.</strong> Sequences</a></li><li class="chapter-item expanded "><a href="architecture/attention.html"><strong aria-hidden="true">3.3.</strong> Attention</a></li><li class="chapter-item expanded "><a href="architecture/convolution.html"><strong aria-hidden="true">3.4.</strong> Convolution</a></li><li class="chapter-item expanded "><a href="architecture/mixer.html"><strong aria-hidden="true">3.5.</strong> Mixer</a></li><li class="chapter-item expanded "><a href="architecture/composition.html"><strong aria-hidden="true">3.6.</strong> Composition</a></li><li class="chapter-item expanded "><a href="architecture/summary.html"><strong aria-hidden="true">3.7.</strong> Summary</a></li></ol></li><li class="chapter-item expanded "><a href="decomposition/main.html"><strong aria-hidden="true">4.</strong> Decompositions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="decomposition/orth.html"><strong aria-hidden="true">4.1.</strong> Orthogonalisation</a></li><li class="chapter-item expanded "><a href="decomposition/diag.html"><strong aria-hidden="true">4.2.</strong> Diagonalisation</a></li><li class="chapter-item expanded "><a href="decomposition/extensions.html"><strong aria-hidden="true">4.3.</strong> Extensions</a></li><li class="chapter-item expanded "><a href="decomposition/summary.html"><strong aria-hidden="true">4.4.</strong> Summary</a></li></ol></li><li class="chapter-item expanded "><a href="interpretability/main.html"><strong aria-hidden="true">5.</strong> Interpretability</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interpretability/duality.html"><strong aria-hidden="true">5.1.</strong> Duality</a></li><li class="chapter-item expanded "><a href="interpretability/sparse.html"><strong aria-hidden="true">5.2.</strong> Sparsity</a></li><li class="chapter-item expanded "><a href="interpretability/structure.html"><strong aria-hidden="true">5.3.</strong> Structure</a></li><li class="chapter-item expanded "><a href="interpretability/features.html"><strong aria-hidden="true">5.4.</strong> Features</a></li><li class="chapter-item expanded "><a href="interpretability/circuits.html"><strong aria-hidden="true">5.5.</strong> Circuits</a></li><li class="chapter-item expanded "><a href="interpretability/supervision.html"><strong aria-hidden="true">5.6.</strong> Supervision</a></li><li class="chapter-item expanded "><a href="interpretability/superposition.html"><strong aria-hidden="true">5.7.</strong> Superposition</a></li><li class="chapter-item expanded "><a href="interpretability/summary.html"><strong aria-hidden="true">5.8.</strong> Summary</a></li></ol></li><li class="chapter-item expanded "><a href="experiments/main.html"><strong aria-hidden="true">6.</strong> Experiments</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="experiments/chess.html"><strong aria-hidden="true">6.1.</strong> Chess</a></li><li class="chapter-item expanded "><a href="experiments/tradeoffs.html"><strong aria-hidden="true">6.2.</strong> Tradeoffs</a></li></ol></li><li class="chapter-item expanded "><a href="conclusion/main.html"><strong aria-hidden="true">7.</strong> Conclusion</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="conclusion/future.html"><strong aria-hidden="true">7.1.</strong> Future Work</a></li></ol></li><li class="chapter-item expanded "><a href="appendix/main.html"><strong aria-hidden="true">8.</strong> Appendix</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="appendix/glossary.html"><strong aria-hidden="true">8.1.</strong> Glossary</a></li><li class="chapter-item expanded "><a href="appendix/norm.html"><strong aria-hidden="true">8.2.</strong> Normalisation</a></li><li class="chapter-item expanded "><a href="appendix/invariants.html"><strong aria-hidden="true">8.3.</strong> Invariants</a></li><li class="chapter-item expanded "><a href="appendix/spiders.html"><strong aria-hidden="true">8.4.</strong> Spiders</a></li><li class="chapter-item expanded "><a href="appendix/squared.html"><strong aria-hidden="true">8.5.</strong> Squared Attention</a></li></ol></li><li class="chapter-item expanded "><a href="documentation/main.html"><strong aria-hidden="true">9.</strong> Documentation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="documentation/modules/main.html"><strong aria-hidden="true">9.1.</strong> Modules</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="documentation/modules/matrix.html"><strong aria-hidden="true">9.1.1.</strong> Matrix</a></li><li class="chapter-item expanded "><a href="documentation/modules/bilinear.html"><strong aria-hidden="true">9.1.2.</strong> Bilinear</a></li><li class="chapter-item expanded "><a href="documentation/modules/attention.html"><strong aria-hidden="true">9.1.3.</strong> Attention</a></li></ol></li><li class="chapter-item expanded "><a href="documentation/comp/main.html"><strong aria-hidden="true">9.2.</strong> Compositions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="documentation/comp/sequential.html"><strong aria-hidden="true">9.2.1.</strong> Sequential</a></li><li class="chapter-item expanded "><a href="documentation/comp/dual.html"><strong aria-hidden="true">9.2.2.</strong> Dual</a></li></ol></li><li class="chapter-item expanded "><a href="documentation/sparse/main.html"><strong aria-hidden="true">9.3.</strong> Sparsification</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="documentation/sparse/tica.html"><strong aria-hidden="true">9.3.1.</strong> TICA</a></li></ol></li><li class="chapter-item expanded "><a href="documentation/plotting/main.html"><strong aria-hidden="true">9.4.</strong> Plotting</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
