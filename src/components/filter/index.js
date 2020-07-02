import $ from "jquery"

const FilterSearch = () => {
  $(document).ready(function () {
    $(".blog-search").keyup(function () {
      const searchTerm = $(".blog-search").val()
      const searchSplit = searchTerm.replace(/ /g, "'):containsi('")

      $.extend($.expr[":"], {
        containsi: function (elem, i, match, array) {
          return (
            (elem.textContent || elem.innerText || "")
              .toLowerCase()
              .indexOf((match[3] || "").toLowerCase()) >= 0
          )
        },
      })

      $(".cards-blog .card-item")
        .not(":containsi('" + searchSplit + "')")
        .each(function (e) {
          $(this).attr("visible", "false")
        })

      $(".cards-blog .card-item:containsi('" + searchSplit + "')").each(
        function (e) {
          $(this).attr("visible", "true")
        }
      )

      let blogCount = $('.cards-blog .card-item[visible="true"]').length
      $(".counter").text(`${blogCount} judul ditemukan`)

      if (blogCount == "0") {
        $(".no-result").show()
      } else {
        $(".no-result").hide()
      }
    })
  })
}

export default FilterSearch
