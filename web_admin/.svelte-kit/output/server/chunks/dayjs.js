import { c as compute_slots, s as subscribe } from "./utils.js";
import { c as create_ssr_component, d as createEventDispatcher, a as add_attribute, b as each, e as escape, v as validate_component, m as missing_component } from "./ssr.js";
import { c as t, f as locale } from "./i18n.js";
import "jquery";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
let dataIdKey = "__PT_ID__";
let checkboxKey = "__PT_CB__";
function getRegexParts(phrase) {
  if (phrase.length > 1) {
    try {
      const groups = phrase.match(/^([/~#;%@'])(.+)\1([gimsuy]*)$/);
      if (groups && !!new RegExp(groups[2], groups[3])) {
        return {
          delimiter: groups[1],
          pattern: groups[2],
          flags: groups[3]
        };
      }
    } catch (e) {
    }
  }
  return false;
}
const HIGHLIGHT_SEARCH_SEGMENT_TYPE = 1;
const HIGHLIGHT_FILTER_SEGMENT_TYPE = 2;
const HIGHLIGHT_OVERLAP_SEGMENT_TYPE = 3;
function sanitizeHtml(html) {
  let sanitizedHtml = html.replace(/<(?!\/?(div|span|code|strong|b|p|ul|ol|li|u|i|em|sup|sub)( +class="[0-9a-zA-z-_\. ]*")?>)[^>]*>/gi, "");
  return sanitizedHtml;
}
function closePopUps({ target }) {
  const poppedEls = Array.from(document.querySelectorAll("[data-popped=true]"));
  const closestPoppedEl = target?.closest("[data-popped=true]");
  poppedEls.forEach((p) => {
    if (p != closestPoppedEl) {
      p.style.visibility = "hidden";
      p.dataset.popped = "";
    }
  });
}
function closeMenu(e) {
  if (e) {
    let menuEl = e?.target?.closest("div[data-name=menu]");
    if (menuEl) {
      menuEl.style.visibility = "hidden";
      menuEl.dataset.popped = "";
    }
  }
}
function toggleMenu(e) {
  let menuEl = e?.target?.parentElement?.querySelector("div[data-name=menu]");
  if (menuEl) {
    if (menuEl.style.visibility !== "visible") {
      closePopUps(e);
      menuEl.style.visibility = "visible";
      menuEl.dataset.popped = "true";
      e.stopPropagation();
    }
  }
}
function locateHighlighterMatches(pageContent, ptRef, Instructs) {
  let searchPhrase;
  let searchIsRegex;
  let filters = {};
  let matches = [];
  let currentData = ptRef.getData();
  searchPhrase = currentData.search?.value ?? "";
  searchIsRegex = currentData.search?.isRegex ?? false;
  Instructs.forEach((instruct) => {
    filters[instruct.key] = {
      value: currentData.filters[instruct.key]?.value ?? "",
      isRegex: currentData.filters[instruct.key]?.isRegex ?? false
    };
  });
  let flags;
  let regexParts;
  if (searchPhrase) {
    let searchRegex = new RegExp("");
    if (searchIsRegex === false) {
      let pattern = searchPhrase.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").trim();
      let words = pattern.toLowerCase().match(/\S+/g);
      if (words?.length) {
        pattern = words.join("|");
      }
      searchRegex = new RegExp(pattern, "gi");
    } else {
      regexParts = getRegexParts(searchPhrase);
      if (!regexParts) {
        throw new Error("RegEx is not valid!");
      }
      flags = regexParts?.flags ?? "";
      searchRegex = new RegExp(regexParts.pattern, flags);
    }
    pageContent.forEach((row, rowIndex) => {
      Instructs.forEach((instruct, instructIndex) => {
        let curMatches = [];
        let tagSuppressedRecord = row[instruct.key].replace(/<\/?[^>]*>/g, (m) => Array(m.length + 1).join(""));
        if (searchIsRegex === false || flags?.indexOf("g") !== -1) {
          curMatches = [...tagSuppressedRecord.matchAll(searchRegex)];
        } else {
          curMatches = [tagSuppressedRecord.match(searchRegex)];
        }
        if (curMatches?.length) {
          if (!matches[rowIndex]) {
            matches[rowIndex] = {};
          }
          if (!matches[rowIndex][instruct.key]) {
            matches[rowIndex][instruct.key] = [];
          }
          curMatches.forEach((match) => {
            if (match) {
              for (let i = match.index; i < match.index + match[0].length; i++) {
                matches[rowIndex][instruct.key][i] = HIGHLIGHT_SEARCH_SEGMENT_TYPE;
              }
            }
          });
        }
      });
    });
  }
  let filterRegex = new RegExp("");
  Instructs.forEach((instruct, instructIndex) => {
    if (filters[instruct.key]?.value) {
      if (filters[instruct.key].isRegex === false) {
        let pattern = filters[instruct.key].value.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").trim();
        let words = pattern.toLowerCase().match(/\S+/g);
        if (words?.length) {
          pattern = words.join("|");
        }
        filterRegex = new RegExp(pattern, "gi");
      } else {
        regexParts = getRegexParts(filters[instruct.key].value);
        if (!regexParts) {
          throw new Error("RegEx is not valid!");
        }
        flags = regexParts?.flags ?? "";
        filterRegex = new RegExp(regexParts.pattern, flags);
      }
      pageContent.forEach((row, rowIndex) => {
        let curMatches = [];
        let tagSuppressedRecord = row[instruct.key].replace(/<\/?[^>]*>/g, (m) => Array(m.length + 1).join(""));
        if (filters[instruct.key].isRegex === false || flags?.indexOf("g") !== -1) {
          curMatches = [...tagSuppressedRecord.matchAll(filterRegex)];
        } else {
          curMatches = [tagSuppressedRecord.match(filterRegex)];
        }
        if (curMatches.length) {
          if (!matches[rowIndex]) {
            matches[rowIndex] = {};
          }
          if (!matches[rowIndex][instruct.key]) {
            matches[rowIndex][instruct.key] = [];
          }
          curMatches.forEach((match) => {
            if (match) {
              for (let i = match.index; i < match.index + match[0].length; i++) {
                if (matches[rowIndex][instruct.key][i] ?? null) {
                  matches[rowIndex][instruct.key][i] = HIGHLIGHT_OVERLAP_SEGMENT_TYPE;
                } else {
                  matches[rowIndex][instruct.key][i] = HIGHLIGHT_FILTER_SEGMENT_TYPE;
                }
              }
            }
          });
        }
      });
    }
  });
  return matches;
}
const PowerTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { ptInstructs = [] } = $$props;
  let { ptOptions = {} } = $$props;
  let { ptData = [] } = $$props;
  let specialInstructs = {
    [dataIdKey]: {
      key: dataIdKey,
      title: "",
      sortable: false,
      filterable: false
    },
    [checkboxKey]: {
      key: checkboxKey,
      title: "",
      sortable: false,
      filterable: false
    }
  };
  createEventDispatcher();
  let options = {
    uniquePrefix: "pt",
    rowsPerPageOptions: [5, 10, 20, 50, 100],
    rowsPerPage: 10,
    paginationBlock: 3,
    headerText: true,
    footerText: true,
    headerFilters: true,
    footerFilters: true,
    headerLoadingBar: true,
    footerLoadingBar: true,
    defaultRegexFlags: "gimsu",
    nestedSorting: false,
    isDataRemote: false,
    totalRows: null,
    filteredRows: null,
    currentPage: 1,
    searchPhrase: "",
    searchIsRegex: false,
    checkboxColumn: false,
    translations: {
      numberFormat: "en-US",
      search: "Search",
      previous: "Previous",
      next: "Next",
      rows: "Rows",
      filterBy: "Filter by",
      of: "of",
      from: "from",
      selectAll: "Select All",
      selectNone: "Select None",
      invertSelection: "Invert Selection",
      add: "Add",
      delete: "Delete",
      checkboxHide: "Hide Checkboxes",
      checkboxShow: "Show Checkboxes"
    },
    userFunctions: { dataFeed: async () => ({}) },
    segments: {
      "topBar": ["search", "pagination"],
      "pTable": ["table"],
      "bottomBar": ["dropdown", "stats", "pagination"]
    },
    sortOrder: { "": "asc", "asc": "desc", "desc": "" }
  };
  let instructs;
  let data;
  let matchedData;
  let sortedData = [];
  let pageData = [];
  let formattedPageData = [];
  let pagination = {
    totalRows: 0,
    firstShownRow: 0,
    lastShownRow: 0,
    totalPages: 1,
    pages: [1]
  };
  let sorting = {};
  let renderStatus = null;
  let searchObj = {};
  let filterObj = {};
  function initialize(ptInstructs2, ptOptions2, ptData2, action = { render: true, preserveFilters: true }) {
    if (ptOptions2) {
      Object.assign(options, ptOptions2);
    }
    options = options;
    if (!searchObj?.value || !action?.preserveFilters) {
      searchObj = {
        value: options.searchPhrase,
        isRegex: options.searchIsRegex,
        isCustom: false
      };
    }
    data = JSON.parse(JSON.stringify(ptData2));
    data = data.map((row) => {
      Object.keys(row).forEach((key) => {
        if (!specialInstructs.hasOwnProperty(key)) {
          if (row[key] === null) {
            row[key] = "";
          } else if (typeof row[key] === "object") {
            row[key] = JSON.stringify(row[key]);
          } else {
            row[key] = row[key].toString();
          }
        }
      });
      return row;
    });
    let tempInstructs = [];
    if (!ptInstructs2?.length) {
      let firstRecordKeys = Object.keys(data?.[0] ?? []);
      firstRecordKeys.forEach((key) => {
        if (!specialInstructs.hasOwnProperty(key)) {
          tempInstructs.push({ key, title: key, parseAs: "text" });
          filterObj[key] = {
            value: "",
            isRegex: false,
            isCustom: false
          };
        }
      });
      instructs = tempInstructs;
    } else {
      ptInstructs2?.forEach((instruct) => {
        if (!specialInstructs.hasOwnProperty(instruct.key)) {
          if (!instruct.hasOwnProperty("title")) {
            instruct["title"] = instruct["key"];
          }
          tempInstructs.push(instruct);
          if (!filterObj[instruct.key] || !action?.preserveFilters) {
            filterObj[instruct.key] = {
              value: instruct?.filterPhrase ?? "",
              isRegex: instruct?.filterIsRegex ?? false,
              isCustom: false
            };
          }
        }
      });
      instructs = tempInstructs;
    }
    if (!instructs?.[0]?.hasOwnProperty(checkboxKey)) {
      instructs = [specialInstructs[checkboxKey], ...instructs];
      filterObj[checkboxKey] = {
        value: "",
        isRegex: false,
        isCustom: false
      };
    }
    let checkboxExists = data?.[0]?.hasOwnProperty(checkboxKey);
    data = data.map((row, index) => {
      Object.keys(row).forEach(() => delete row[dataIdKey]);
      row = Object.assign({ [dataIdKey]: index }, row);
      if (!checkboxExists) {
        row = Object.assign({ [checkboxKey]: false }, row);
      }
      return row;
    });
    if (action?.render) {
      renderTable();
    }
  }
  async function renderTable() {
    renderStatus = "rendering";
    if (options.isDataRemote) {
      let remoteParams = {};
      remoteParams["options"] = options;
      remoteParams["search"] = searchObj;
      remoteParams["filters"] = filterObj;
      remoteParams["sorting"] = sorting;
      let newData = await options.userFunctions?.dataFeed(remoteParams);
      if (newData?.data) {
        initialize(newData.instructs ?? [], newData.options ?? {}, newData.data, { render: false, preserveFilters: true });
        matchedData = data;
        sortedData = matchedData;
      }
    } else {
      applyFilters();
      applySort();
    }
    applyPagination();
    renderStatus = "completed";
  }
  function applySort() {
    const firstBy = function() {
      const preserveCase = (v) => v;
      const removeCase = (v) => typeof v === "string" ? v.toLowerCase() : v;
      const makeCompareFunction = (f, opt) => {
        opt = typeof opt === "object" ? opt : { direction: opt };
        if (typeof f != "function") {
          var prop = f;
          f = function(v1) {
            return !!v1[prop] ? v1[prop] : "";
          };
        }
        if (f.length === 1) {
          var uf = f;
          var preProcess = opt.caseSensitive ? preserveCase : removeCase;
          var cmp = opt.cmp || function(v1, v2) {
            return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
          };
          f = (v1, v2) => cmp(preProcess(uf(v1)), preProcess(uf(v2)));
        }
        const descTokens = { "-1": "", desc: "" };
        if (opt.direction in descTokens)
          return function(v1, v2) {
            return -f(v1, v2);
          };
        return f;
      };
      function tb(func, opt) {
        var x = typeof this === "function" && !this.firstBy ? this : false;
        var y = makeCompareFunction(func, opt);
        var f = x ? function(a, b) {
          return x(a, b) || y(a, b);
        } : y;
        f.thenBy = tb;
        return f;
      }
      tb.firstBy = tb;
      return tb;
    }();
    sortedData = matchedData;
    let compFunc;
    if (Object.keys(sorting).length) {
      Object.entries(sorting).forEach(([key, dir], index) => {
        let opt = { caseSensitive: false, direction: dir };
        let instruct = instructs.find((instruct2) => instruct2.key === key);
        if (instruct?.sortCaseSensitive) {
          opt.caseSensitive = true;
        }
        if (instruct?.userFunctions?.customSort) {
          opt.cmp = instruct.userFunctions.customSort;
        }
        if (index === 0) {
          compFunc = firstBy(key, opt);
        } else {
          compFunc = compFunc.thenBy(key, opt);
        }
      });
      sortedData = sortedData.sort(compFunc);
    }
  }
  function applyFilters() {
    matchedData = JSON.parse(JSON.stringify(data));
    let previousSearchObj = JSON.parse(JSON.stringify(searchObj));
    searchObj.isRegex = false;
    searchObj.isCustom = false;
    if (searchObj.value) {
      let customSearchContinue = true;
      if (typeof (options.userFunctions?.customSearch ?? null) === "function" && options.userFunctions?.customSearch !== void 0) {
        let customSearchResult = options.userFunctions.customSearch(matchedData, searchObj.value);
        matchedData = customSearchResult.data;
        customSearchContinue = customSearchResult.continue;
        searchObj.isCustom = !customSearchContinue;
      }
      if (customSearchContinue !== false) {
        let regexParts = getRegexParts(searchObj.value);
        let regexp;
        if (regexParts) {
          try {
            let flags = regexParts.flags;
            searchObj.isRegex = true;
            if (!regexParts?.flags && !previousSearchObj.isRegex) {
              flags = options.defaultRegexFlags;
              searchObj.value += flags;
            }
            regexp = new RegExp(regexParts.pattern, flags);
          } catch (e) {
          }
        }
        if (searchObj.isRegex) {
          matchedData = matchedData.filter((d) => {
            return Object.keys(d).some((key) => {
              if (!specialInstructs.hasOwnProperty(key)) {
                return regexp.test(d?.[key]);
              } else {
                return false;
              }
            });
          });
        } else {
          let words = searchObj.value.trim().toLowerCase().match(/\S+/g);
          matchedData = matchedData.filter((d) => {
            let unmatchedWords = Object.assign([], words);
            for (let key of Object.keys(d)) {
              if (!specialInstructs.hasOwnProperty(key)) {
                let searchableString = d?.[key]?.toString()?.toLowerCase();
                unmatchedWords = unmatchedWords.filter((word) => {
                  if (searchableString?.indexOf(word) > -1) {
                    return false;
                  }
                  return true;
                });
              }
            }
            return !unmatchedWords.length;
          });
        }
      }
    }
    Object.entries(filterObj).forEach(([key, filter]) => {
      let previousFilter = JSON.parse(JSON.stringify(filter));
      filterObj[key].isRegex = false;
      filterObj[key].isCustom = false;
      if (filter.value?.length) {
        let customFilterContinue = true;
        let correspondingInstruct = instructs.find((d) => d.key === key);
        if (typeof (correspondingInstruct?.userFunctions?.customFilter ?? null) === "function" && correspondingInstruct?.userFunctions?.customFilter !== void 0) {
          let customFilterResult = correspondingInstruct.userFunctions.customFilter(matchedData, filter.value);
          matchedData = customFilterResult.data;
          customFilterContinue = customFilterResult.continue;
          filterObj[key].isCustom = !customFilterContinue;
        }
        if (customFilterContinue !== false) {
          let regexParts = getRegexParts(filter.value);
          if (regexParts) {
            try {
              let flags = regexParts.flags;
              filterObj[key].isRegex = true;
              if (!regexParts?.flags && !previousFilter.isRegex && filterObj[key]?.value) {
                flags = options.defaultRegexFlags;
                filterObj[key].value += flags;
              }
              matchedData = matchedData.filter((d) => new RegExp(regexParts.pattern, flags).test(d[key]));
            } catch (e) {
            }
          }
          if (!filter.isRegex) {
            let words = filter.value.trim().toLowerCase().match(/\S+/g);
            matchedData = matchedData.filter((d) => {
              let unmatchedWords = Object.assign([], words);
              let searchableString = d?.[key]?.toString()?.toLowerCase();
              unmatchedWords = unmatchedWords.filter((word) => {
                if (searchableString?.indexOf(word) > -1) {
                  return false;
                }
                return true;
              });
              return !unmatchedWords.length;
            });
          }
        }
      }
    });
    if (matchedData.length !== data?.length) {
      options.currentPage = 1;
    }
  }
  function applyPagination() {
    let p = {};
    p.totalRows = options?.totalRows ?? data?.length;
    p.filteredRows = options?.filteredRows ?? sortedData?.length;
    if (options?.currentPage > p.totalRows / options?.rowsPerPage) {
      options.currentPage = Math.ceil(p.totalRows / options?.rowsPerPage);
      if (options.currentPage < 1) {
        options.currentPage = 1;
      }
    }
    p.firstShownRow = Math.min(p.filteredRows, (options?.currentPage - 1) * options?.rowsPerPage + 1);
    p.lastShownRow = Math.min(p.filteredRows, options.currentPage * options.rowsPerPage);
    if (options.rowsPerPage) {
      p.totalPages = Math.ceil(p.filteredRows / options.rowsPerPage);
    }
    p.pages = [1];
    if (options.currentPage <= options.paginationBlock + 1 || p.totalPages <= options.paginationBlock + 4) {
      if (p.totalPages > 1) {
        p.pages.push(2);
      }
    } else if (p.totalPages > options.paginationBlock + 4) {
      p.pages.push(0);
    }
    if (options.currentPage <= options.paginationBlock + 1 || p.totalPages <= options.paginationBlock + 4) {
      [...Array(options.paginationBlock)].forEach((_, index) => {
        if (index + 3 < p.totalPages) {
          p.pages.push(index + 3);
        }
      });
    } else if (p.totalPages - options.currentPage > options.paginationBlock) {
      [...Array((options.paginationBlock - 1) / 2)].forEach((_, index) => {
        p.pages.push(options.currentPage - (index + 1));
      });
      p.pages.push(options.currentPage);
      [...Array((options.paginationBlock - 1) / 2)].forEach((_, index) => {
        p.pages.push(options.currentPage + (index + 1));
      });
    } else {
      [...Array(options.paginationBlock)].forEach((_, index) => {
        p.pages.push(p.totalPages - (4 - index));
      });
    }
    if (p.totalPages > options.paginationBlock + 3) {
      if (options.currentPage >= p.totalPages - options.paginationBlock) {
        p.pages.push(p.totalPages - 1);
      } else {
        p.pages.push(0);
      }
    }
    if (p.totalPages >= 3) {
      p.pages.push(p.totalPages);
    }
    if (!options.isDataRemote) {
      pageData = sortedData.slice(p.firstShownRow - 1, p.lastShownRow);
    } else {
      pageData = sortedData;
    }
    if (typeof (options.userFunctions?.customParse ?? null) === "function" && options.userFunctions?.customParse !== void 0) {
      formattedPageData = options.userFunctions.customParse(JSON.parse(JSON.stringify(pageData)));
    } else {
      formattedPageData = JSON.parse(JSON.stringify(pageData));
    }
    pagination = p;
  }
  function toggleCheckboxColumn(e) {
    closeMenu(e);
    options.checkboxColumn = !options.checkboxColumn;
    initialize(instructs, options, data);
  }
  function selectAllAction(e) {
    closeMenu(e);
    data = data.map((row) => {
      row[checkboxKey] = true;
      return row;
    });
    initialize(instructs, options, data);
  }
  function selectNoneAction(e) {
    closeMenu(e);
    data = data.map((row) => {
      delete row[checkboxKey];
      return row;
    });
    initialize(instructs, options, data);
  }
  function invertSelectionAction(e) {
    closeMenu(e);
    data = data.map((row) => {
      row[checkboxKey] = !row[checkboxKey];
      return row;
    });
    initialize(instructs, options, data);
  }
  function addAction(e) {
    closeMenu(e);
    let emptyRow = {};
    Object.keys(data[0]).forEach((key) => {
      if (key === dataIdKey) {
        emptyRow[key] = data.length;
      } else if (key === checkboxKey) {
        emptyRow[key] = true;
      } else {
        emptyRow[key] = "";
      }
    });
    data = [...data, emptyRow];
    options.currentPage = Math.ceil(data.length / options?.rowsPerPage);
    initialize(instructs, options, data);
  }
  function deleteAction(e) {
    closeMenu(e);
    let deletedRows = [];
    data = data.filter((row) => {
      if (row[checkboxKey]) {
        deletedRows.push(row);
      }
      return !row[checkboxKey];
    });
    initialize(instructs, options, data);
    const userCallback = options?.userFunctions?.deleteActionCallback;
    if (userCallback) {
      userCallback(deletedRows);
    }
  }
  function getData(removeMetadata = true, include = ["options", "instructs", "data", "search", "filters"]) {
    let exportedInstructs = JSON.parse(JSON.stringify(instructs));
    if (removeMetadata) {
      exportedInstructs = exportedInstructs.filter((instruct) => !specialInstructs.hasOwnProperty(instruct.key));
    }
    return {
      options: include.includes("options") ? options : {},
      instructs: include.includes("instructs") ? exportedInstructs : [],
      data: include.includes("data") ? exportData(removeMetadata, data) : [],
      matchedData: include.includes("matchedData") ? exportData(removeMetadata, matchedData) : [],
      sortedData: include.includes("sortedData") ? exportData(removeMetadata, sortedData) : [],
      pageData: include.includes("pageData") ? exportData(removeMetadata, pageData) : [],
      formattedPageData: include.includes("formattedPageData") ? exportData(removeMetadata, formattedPageData) : [],
      search: include.includes("search") ? searchObj : {},
      filters: include.includes("filters") ? filterObj : {}
    };
  }
  function exportData(removeMetadata, _data) {
    if (!removeMetadata) {
      return _data;
    }
    let exportedData = JSON.parse(JSON.stringify(_data));
    exportedData.map((row) => {
      Object.keys(row).forEach((key) => {
        specialInstructs.hasOwnProperty(key) ? delete row[key] : null;
      });
      return row;
    });
    return exportedData;
  }
  let highlightTags = {
    [HIGHLIGHT_SEARCH_SEGMENT_TYPE]: {
      open: `<span class="search-match">`,
      close: `</span>`
    },
    [HIGHLIGHT_FILTER_SEGMENT_TYPE]: {
      open: `<span class="filter-match">`,
      close: `</span>`
    },
    [HIGHLIGHT_OVERLAP_SEGMENT_TYPE]: {
      open: `<span class="overlap-match">`,
      close: `</span>`
    }
  };
  function highlighter(pageContent, ptRef, ptInstructs2) {
    if (ptRef?.getData) {
      let searchMatches = locateHighlighterMatches(pageContent, ptRef, ptInstructs2);
      pageContent = highlightMatches(pageContent, searchMatches, ptInstructs2);
    }
    return pageContent;
  }
  function highlightMatches(pageContent, matches, Instructs) {
    let typesArray = [];
    pageContent.forEach((rowData, rowIndex) => {
      Instructs.forEach((instruct) => {
        if (typesArray = matches[rowIndex]?.[instruct.key]) {
          let tagType = -1;
          let segment = { startChar: -1, endChar: -1, type: -1 };
          let segments = [];
          let lastIndex = 0;
          typesArray.forEach((type, index) => {
            if (tagType === -1) {
              segment = { startChar: index, endChar: index, type };
            } else if (index - lastIndex > 1) {
              segments.push({ ...segment, endChar: lastIndex });
              segment = { startChar: index, endChar: index, type };
            } else if (type != tagType) {
              segments.push({ ...segment });
              segment = { startChar: index, endChar: index, type };
            } else {
              segment.endChar = index;
            }
            tagType = type;
            lastIndex = index;
          });
          if (segment.type > 0) {
            segments.push(segment);
          }
          segments = segments.sort((a, b) => b.startChar - a.startChar);
          segments.forEach((segment2) => {
            rowData[instruct.key] = [
              rowData[instruct.key].slice(0, segment2.startChar),
              highlightTags[segment2.type].open,
              rowData[instruct.key].slice(segment2.startChar, segment2.endChar + 1),
              highlightTags[segment2.type].close,
              rowData[instruct.key].slice(segment2.endChar + 1)
            ].join("");
          });
        }
      });
    });
    return pageContent;
  }
  if ($$props.ptInstructs === void 0 && $$bindings.ptInstructs && ptInstructs !== void 0)
    $$bindings.ptInstructs(ptInstructs);
  if ($$props.ptOptions === void 0 && $$bindings.ptOptions && ptOptions !== void 0)
    $$bindings.ptOptions(ptOptions);
  if ($$props.ptData === void 0 && $$bindings.ptData && ptData !== void 0)
    $$bindings.ptData(ptData);
  if ($$props.closePopUps === void 0 && $$bindings.closePopUps && closePopUps !== void 0)
    $$bindings.closePopUps(closePopUps);
  if ($$props.closeMenu === void 0 && $$bindings.closeMenu && closeMenu !== void 0)
    $$bindings.closeMenu(closeMenu);
  if ($$props.toggleMenu === void 0 && $$bindings.toggleMenu && toggleMenu !== void 0)
    $$bindings.toggleMenu(toggleMenu);
  if ($$props.toggleCheckboxColumn === void 0 && $$bindings.toggleCheckboxColumn && toggleCheckboxColumn !== void 0)
    $$bindings.toggleCheckboxColumn(toggleCheckboxColumn);
  if ($$props.selectAllAction === void 0 && $$bindings.selectAllAction && selectAllAction !== void 0)
    $$bindings.selectAllAction(selectAllAction);
  if ($$props.selectNoneAction === void 0 && $$bindings.selectNoneAction && selectNoneAction !== void 0)
    $$bindings.selectNoneAction(selectNoneAction);
  if ($$props.invertSelectionAction === void 0 && $$bindings.invertSelectionAction && invertSelectionAction !== void 0)
    $$bindings.invertSelectionAction(invertSelectionAction);
  if ($$props.addAction === void 0 && $$bindings.addAction && addAction !== void 0)
    $$bindings.addAction(addAction);
  if ($$props.deleteAction === void 0 && $$bindings.deleteAction && deleteAction !== void 0)
    $$bindings.deleteAction(deleteAction);
  if ($$props.getData === void 0 && $$bindings.getData && getData !== void 0)
    $$bindings.getData(getData);
  if ($$props.highlighter === void 0 && $$bindings.highlighter && highlighter !== void 0)
    $$bindings.highlighter(highlighter);
  {
    initialize(ptInstructs, ptOptions, ptData);
  }
  return `<div data-component="powertable" data-name="main-container"${add_attribute("data-prefix", options.uniquePrefix, 0)}${add_attribute("data-status", renderStatus, 0)}>${each(Object.entries(options.segments ?? {}), ([segment_name, segment_arr]) => {
    return `<div${add_attribute("data-name", segment_name, 0)} data-type="segment">${each(segment_arr, (segment_code, segment_index) => {
      return `${segment_code.toLowerCase() === "search" ? `<div data-name="search-container"${add_attribute("data-segment_index", segment_index, 0)}><label><span><span>${escape(options.translations?.search)}</span></span> <input data-name="search-input" type="text" placeholder=" "${add_attribute("data-is_regex", searchObj.isRegex, 0)}${add_attribute("data-is_custom", searchObj.isCustom, 0)}${add_attribute("value", searchObj.value, 0)}></label> </div>` : `${segment_code.toLowerCase() === "stats" ? `<div data-name="stats-container"${add_attribute("data-segment_index", segment_index, 0)}>${escape(Intl.NumberFormat(options?.translations?.numberFormat)?.format(pagination.firstShownRow ?? 1))}-${escape(Intl.NumberFormat(options?.translations?.numberFormat)?.format(pagination.lastShownRow ?? 1) ?? pagination.lastShownRow)} ${escape(options.translations?.of)} ${escape(Intl.NumberFormat(options?.translations?.numberFormat)?.format(options.filteredRows ?? sortedData.length) ?? sortedData.length)} ${(options.filteredRows ?? sortedData.length) !== pagination.totalRows ? `(${escape(options.translations?.from)} ${escape(Intl.NumberFormat(options?.translations?.numberFormat)?.format(pagination.totalRows ?? 1) ?? pagination.totalRows)})` : ``} </div>` : `${segment_code.toLowerCase() === "table" ? `<div data-name="table-container"${add_attribute("data-segment_index", segment_index, 0)}><table><thead>${options.headerLoadingBar ? `<tr data-name="loading_bar-tr"><th${add_attribute("colspan", instructs.length, 0)}></th> </tr>` : ``} ${options.headerText ? `<tr data-name="titles-tr">${each(instructs, (instruct) => {
        return `${specialInstructs.hasOwnProperty(instruct?.key) ? `${instruct?.key === checkboxKey && options.checkboxColumn ? `<th${add_attribute("data-key", instruct.key, 0)}${add_attribute("data-sortable", instruct?.sortable, 0)}><div data-name="actions-container"><button data-name="handle"></button> <div data-name="menu"><button data-name="item">${escape(options.translations?.selectAll)}</button> <button data-name="item">${escape(options.translations?.selectNone)}</button> <button data-name="item">${escape(options.translations?.invertSelection)}</button> <button data-name="item">${escape(options.translations?.add)}</button> <button data-name="item">${escape(options.translations?.delete)}</button> </div></div> </th>` : ``}` : `<th${add_attribute("data-key", instruct.key, 0)}${add_attribute("data-sortable", instruct?.sortable, 0)}${add_attribute("data-dir", sorting?.[instruct?.key], 0)}><button ${!(instruct?.sortable ?? true) ? "disabled" : ""}><span>${escape(instruct.title)}</span></button> </th>`}`;
      })} </tr>` : ``} ${options.headerFilters ? `<tr data-name="filters-tr">${each(instructs, (instruct) => {
        return `${specialInstructs.hasOwnProperty(instruct?.key) ? `${instruct?.key === checkboxKey && options.checkboxColumn ? `<th${add_attribute("data-key", instruct.key, 0)}></th>` : ``}` : `<th${add_attribute("data-key", instruct.key, 0)}>${instruct?.filterable !== false ? `<input${add_attribute("data-key", instruct.key, 0)}${add_attribute("data-is_regex", filterObj[instruct.key].isRegex, 0)}${add_attribute("data-is_custom", filterObj[instruct.key].isCustom, 0)} placeholder="${escape(options.translations?.filterBy, true) + " " + escape(instruct.title, true)}"${add_attribute("value", filterObj[instruct.key].value, 0)}>` : ``} </th>`}`;
      })} </tr>` : ``}</thead> <tbody>${formattedPageData.length ? `${each(formattedPageData, (record, index) => {
        return `<tr${add_attribute("data-index", index, 0)}${add_attribute("data-id", record[dataIdKey], 0)}>${each(instructs, (instruct) => {
          return `${specialInstructs.hasOwnProperty(instruct?.key) ? `${instruct?.key === checkboxKey && options.checkboxColumn ? `<td${add_attribute("data-key", instruct.key, 0)}><input type="checkbox"${add_attribute("checked", data[record[dataIdKey]][checkboxKey], 1)}> </td>` : ``}` : `<td${add_attribute("data-key", instruct.key, 0)}>${data[record[dataIdKey]]?.[checkboxKey] ? `<div data-name="edit-block"><label><span><span>${escape(instruct.title)}</span> </span><textarea data-name="edit-textarea"${add_attribute("data-key", instruct.key, 0)}>${escape(data[record[dataIdKey]][instruct.key], false)}</textarea></label> <button data-name="edit-submit" data-svelte-h="svelte-12du5hf">✔️</button> </div>` : `${instruct?.parseAs === "component" && instruct?.dataComponent ? `${validate_component(instruct?.dataComponent || missing_component, "svelte:component").$$render(
            $$result,
            {
              value: record[instruct.key],
              rowIndex: index,
              rowId: record[dataIdKey],
              instructKey: instruct.key
            },
            {},
            {}
          )}` : `${instruct?.parseAs === "unsafe-html" ? `<!-- HTML_TAG_START -->${record[instruct.key] ?? ""}<!-- HTML_TAG_END -->` : `${instruct?.parseAs === "html" ? `<!-- HTML_TAG_START -->${sanitizeHtml(record[instruct.key] ?? "")}<!-- HTML_TAG_END -->` : `${escape(record[instruct.key] ?? "")}`}`}`}`} </td>`}`;
        })} </tr>`;
      })}` : `${renderStatus === "completed" ? `<tr><td data-name="noResults-td"${add_attribute("colspan", instructs.length, 0)}>${$$slots.noResults ? `${slots.noResults ? slots.noResults({}) : ``}` : `<div data-svelte-h="svelte-g98l4w">Nothing to display</div>`}</td> </tr>` : `${renderStatus === "rendering" ? `<tr><td data-name="rendering-td"${add_attribute("colspan", instructs.length, 0)}>${$$slots.rendering ? `${slots.rendering ? slots.rendering({}) : ``}` : `<div data-svelte-h="svelte-194gxkm">Loading...</div>`}</td> </tr>` : ``}`}`}</tbody> <tfoot>${options.footerFilters ? `<tr data-name="filters-tr">${each(instructs, (instruct) => {
        return `${specialInstructs.hasOwnProperty(instruct?.key) ? `${instruct?.key === checkboxKey && options.checkboxColumn ? `<th${add_attribute("data-key", instruct.key, 0)}></th>` : ``}` : `<th${add_attribute("data-key", instruct.key, 0)}>${instruct?.filterable !== false ? `<input${add_attribute("data-key", instruct.key, 0)}${add_attribute("data-is_regex", filterObj[instruct.key].isRegex, 0)}${add_attribute("data-is_custom", filterObj[instruct.key].isCustom, 0)} placeholder="${escape(options.translations?.filterBy, true) + " " + escape(instruct.title, true)}"${add_attribute("value", filterObj[instruct.key].value, 0)}>` : ``} </th>`}`;
      })} </tr>` : ``} ${options.footerText ? `<tr data-name="titles-tr">${each(instructs, (instruct) => {
        return `${specialInstructs.hasOwnProperty(instruct?.key) ? `${instruct?.key === checkboxKey && options.checkboxColumn ? `<th${add_attribute("data-key", instruct.key, 0)}${add_attribute("data-sortable", instruct?.sortable, 0)}></th>` : ``}` : `<th${add_attribute("data-key", instruct.key, 0)}${add_attribute("data-sortable", instruct?.sortable, 0)}${add_attribute("data-dir", sorting?.[instruct?.key], 0)}><button ${!(instruct?.sortable ?? true) ? "disabled" : ""}><span>${escape(instruct.title)}</span></button> </th>`}`;
      })} </tr>` : ``} ${options.footerLoadingBar ? `<tr data-name="loading_bar-tr"><th${add_attribute("colspan", instructs.length, 0)}></th> </tr>` : ``} </tfoot></table> </div>` : `${segment_code.toLowerCase() === "dropdown" ? `<div data-name="dropdown-container"${add_attribute("data-segment_index", segment_index, 0)}>${escape(options.translations?.rows)} <select>${each(options.rowsPerPageOptions ?? [], (num) => {
        return `<option${add_attribute("value", num, 0)}>${escape(Intl.NumberFormat(options?.translations?.numberFormat)?.format(num) ?? num)}</option>`;
      })}</select> </div>` : `${segment_code.toLowerCase() === "settings" ? `<div data-name="settings-container"${add_attribute("data-segment_index", segment_index, 0)}><button data-name="handle"></button> <div data-name="menu">${$$slots.settings ? `${slots.settings ? slots.settings({}) : ``}` : `<button data-name="item">${escape(options.checkboxColumn ? options.translations?.checkboxHide : options.translations?.checkboxShow)}</button>`}</div> </div>` : `${segment_code.toLowerCase() === "pagination" ? `<div data-name="pagination-container"${add_attribute("data-segment_index", segment_index, 0)}><button ${options.currentPage === 1 ? "disabled" : ""}>${escape(options.translations?.previous)}</button> ${pagination.totalPages ? `${each(pagination.pages ?? [], (pageNum) => {
        return `${pageNum === 0 ? `<button ${"disabled"} data-svelte-h="svelte-1puht3d">...</button>` : `<button${add_attribute("data-active", options.currentPage === pageNum, 0)}>${escape(Intl.NumberFormat(options?.translations?.numberFormat)?.format(pageNum) ?? pageNum)}</button>`}`;
      })}` : `<button${add_attribute("data-active", true, 0)} data-svelte-h="svelte-sc96c5">1</button>`} <button ${!pagination.totalPages || options.currentPage === pagination.totalPages ? "disabled" : ""}>${escape(options.translations?.next)}</button> </div>` : ``}`}`}`}`}`}`;
    })} </div>`;
  })}</div>`;
});
const powerTable = "";
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  let { auth_token } = $$props;
  let { pathname } = $$props;
  let { columns } = $$props;
  let { map_cells } = $$props;
  let searchBox;
  let filters = [];
  let filterNames = [];
  let filterParameters = {};
  let ptInstructs = [];
  let ptOptions = {
    rowsPerPage: 10,
    footerText: false,
    headerFilters: false,
    footerFilters: false,
    isDataRemote: true,
    segments: {
      "pTable": ["table"],
      "bottomBar": ["dropdown", "stats", "pagination"]
    },
    userFunctions: { dataFeed: loader, customParse: map_cells }
  };
  let ptData = [];
  fetch(pathname + "/filters", {
    headers: { "Authorization": `Bearer: ${auth_token}` }
  }).then((r) => r.json()).then(function(filtersData) {
    let newFilters = [];
    let newFilterNames = [];
    for (const filterData of filtersData.data) {
      let filter = {
        "column": filterData.name,
        "type": filterData.type
      };
      if (filterData.type === "list") {
        filter.values = filterData.values;
      }
      newFilters.push(filter);
      newFilterNames.push(filterData.name);
    }
    filters = newFilters;
    filterNames = newFilterNames;
    changeTranslations();
  });
  function changeTranslations(locale2) {
    ptInstructs = columns.map(function(column) {
      column = Object.assign({}, column);
      if (column.title === void 0) {
        column.title = $t("common." + column.key);
      }
      column.sortable = filterNames.includes(column.key);
      return column;
    });
    ptOptions.translations = {
      numberFormat: "ru-RU",
      search: $t("common.search"),
      next: $t("common.next page"),
      previous: $t("common.previous page"),
      rows: $t("common.rows per page"),
      of: $t("common.page of pages"),
      from: $t("common.results total")
    };
  }
  async function loader({ options, sorting }) {
    let orderColumn = Object.keys(sorting)[0];
    let orderDirection = Object.values(sorting)[0];
    if (orderColumn === void 0) {
      orderColumn = ptInstructs[0].key;
    }
    if (!orderDirection) {
      orderDirection = "asc";
    }
    const url = new URL(pathname);
    url.searchParams.set("length", options.rowsPerPage);
    url.searchParams.set("order_column", orderColumn);
    url.searchParams.set("order_direction", String(orderDirection));
    url.searchParams.set("start", String((options.currentPage - 1) * options.rowsPerPage));
    for (const filterName of Object.keys(filterParameters)) {
      url.searchParams.append("filter_name[]", filterName);
      url.searchParams.append("filter_value[]", filterParameters[filterName]);
    }
    let games = await fetch(url.toString(), {
      method: "GET",
      headers: { "Authorization": `Bearer: ${auth_token}` }
    }).then((r) => r.json());
    if (games.data === void 0) {
      return {};
    }
    let recordsTotal = games.data.recordsTotal;
    let totalPages = Math.ceil(recordsTotal / options.rowsPerPage);
    let recordsFiltered = games.data.recordsFiltered;
    options.totalRows = recordsTotal;
    options.totalPages = totalPages;
    options.filteredRows = recordsFiltered;
    return {
      instructs: ptInstructs,
      options,
      data: games.data.data
    };
  }
  if ($$props.auth_token === void 0 && $$bindings.auth_token && auth_token !== void 0)
    $$bindings.auth_token(auth_token);
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.map_cells === void 0 && $$bindings.map_cells && map_cells !== void 0)
    $$bindings.map_cells(map_cells);
  {
    changeTranslations();
  }
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `<div class="row"><div class="row justify-content-between "><div class="col-auto"><div class="d-md-flex mt-2">${slots.default ? slots.default({}) : ``}</div></div></div> <div class="row mt-4 justify-content-between mb-4"><div class="col-auto"><div class="d-md-flex "><button class="btn btn-esplatform-primary text-900 me-4 esDtExportExcel"><span class="fa-sharp fa-regular fa-file-excel"></span> ${escape($t("common.export excel"))}</button> <button class="btn btn-esplatform-primary text-900 esDtExportPdf"><span class="fa-solid fa-file-pdf"></span> ${escape($t("common.export pdf"))}</button></div></div> ${filters.length > 0 ? `<div class="col-auto"><div class="d-flex"><button class="btn px-3 btn-esplatform-secondary position-relative" type="button" data-bs-toggle="modal" data-bs-target="#filterDtList" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-filter text-primary" data-fa-transform="down-3"></span> ${Object.keys(filterParameters).length > 0 ? ` <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>` : ``}</button> <div class="modal fade" id="filterDtList" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content border"><div class="modal-header border-200 p-4"><h5 class="modal-title text-1000 fs-2 lh-sm">${escape($t("common.filter"))}</h5> <button class="btn p-1 text-900" type="button" data-bs-dismiss="modal" aria-label="Close" data-svelte-h="svelte-8dd2kt"><span class="fas fa-times fs--1"></span></button></div> <div class="modal-body pt-4 pb-2 px-4"${add_attribute("this", searchBox, 0)}>${each(filters, (filter) => {
    return `${filter.type === "text" ? `<div class="form-floating mb-4 "><input${add_attribute("id", filter.column, 0)} type="text" class="form-control esDTSearchInput"${add_attribute("data-name", filter.column, 0)}${add_attribute("placeholder", $t("common." + filter.column), 0)} value=""> <label${add_attribute("for", filter.column, 0)}>${escape($t("common." + filter.column))}</label> </div>` : `${filter.type === "list" ? `<select class="form-select mb-4 esDTSearchInput"${add_attribute("data-name", filter.column, 0)}><option selected${add_attribute("value", $t("common." + filter.column), 0)}>${escape($t("common." + filter.column))}</option>${each(filter.values, (value) => {
      return `<option${add_attribute("value", value, 0)}>${escape(value)}</option>`;
    })}</select>` : ``}`}`;
  })}</div> <div class="modal-footer"><button class="btn btn-esplatform-tertiary" data-bs-dismiss="modal">${escape($t("common.reset"))}</button> <button class="btn btn-esplatform-primary" data-bs-dismiss="modal">${escape($t("common.apply"))}</button></div></div></div></div></div></div>` : ``}</div> ${validate_component(PowerTable, "PowerTable").$$render($$result, { ptData, ptInstructs, ptOptions }, {}, {
    rendering: () => {
      return `<div slot="rendering">${escape($t("common.loading"))}</div>`;
    },
    noResults: () => {
      return `<div slot="noResults">${escape($t("common.empty table"))}</div>`;
    }
  })}</div>`;
});
dayjs.extend(relativeTime);
export {
  View as V
};
