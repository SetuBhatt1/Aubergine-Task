import React, { useState } from "react";
import UniCard from "./UniCard";

const data = [
  {
    name: "Engineering Institute of Technology",
    domains: ["student.eit.edu.au"],
    web_pages: ["https://www.eit.edu.au/"],
    country: "Australia",
    alpha_two_code: "AU",
    state_province: null,
  },
  {
    name: "Universitas Nusa Putra",
    domains: ["nusaputra.ac.id"],
    web_pages: ["https://nusaputra.ac.id"],
    country: "Indonesia",
    alpha_two_code: "ID",
    state_province: null,
  },
  {
    name: "University of Kyrenia",
    domains: ["std.kyrenia.edu.tr", "kyrenia.edu.tr"],
    web_pages: ["https://kyrenia.edu.tr"],
    country: "Turkey",
    alpha_two_code: "TR",
    state_province: null,
  },
  {
    name: "Regent University College of Science and Technology",
    domains: ["regent.edu.gh"],
    web_pages: ["https://regent.edu.gh"],
    country: "Ghana",
    alpha_two_code: "GH",
    state_province: null,
  },
  {
    name: "Wroclaw Akademia Biznesu",
    domains: ["student.wab.edu.pl", "wab.edu.pl"],
    web_pages: ["https://wab.edu.pl"],
    country: "Poland",
    alpha_two_code: "PL",
    state_province: null,
  },
  {
    name: "Atharva College of Engineering",
    domains: ["atharvacoe.ac.in"],
    web_pages: ["https://atharvacoe.ac.in"],
    country: "India",
    alpha_two_code: "IN",
    state_province: "Mumbai",
  },
  {
    name: "Toronto Baptist Seminary and Bible College",
    domains: ["tbs.edu"],
    web_pages: ["https://tbs.edu"],
    country: "Canada",
    alpha_two_code: "CA",
    state_province: "Ontario",
  },
  {
    name: "Universidade Comunitária da Região de Chapecó - Unochapecó",
    domains: ["unochapeco.edu.br"],
    web_pages: ["https://unochapeco.edu.br"],
    country: "Brazil",
    alpha_two_code: "BR",
    state_province: null,
  },
  {
    name: "West Herts College",
    domains: ["student.westherts.ac.uk", "westherts.ac.uk"],
    web_pages: ["https://westherts.ac.uk"],
    country: "United Kingdom",
    alpha_two_code: "GB",
    state_province: null,
  },
  {
    name: "Bhagwan Parshuram Institute of Technology",
    domains: ["bpitindia.edu.in", "bpitindia.in"],
    web_pages: ["http://bpitindia.ac.in"],
    country: "India",
    alpha_two_code: "IN",
    state_province: "Delhi",
  },
  {
    "name": "Bhagwan Parshuram Institute of Technology",
    "domains": ["bpitindia.edu.in", "bpitindia.in"],
    "web_pages": ["http://bpitindia.ac.in"],
    "country": "India",
    "alpha_two_code": "IN",
    "state-province": "Delhi"
  },
  {
    "name": "National Institute of Applied Sciences of Toulouse",
    "domains": ["insa-toulouse.fr"],
    "web_pages": ["https://insa-toulouse.fr"],
    "country": "France",
    "alpha_two_code": "FR",
    "state-province": null
  },
  {
    "name": "Bugema University",
    "domains": ["bugemauniv.ac.ug"],
    "web_pages": ["https://bugemauniv.ac.ug/"],
    "country": "Uganda",
    "alpha_two_code": "UG",
    "state-province": "Luweero"
  },
  {
    "name": "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
    "domains": ["mbzuai.ac.ae"],
    "web_pages": ["https://mbzuai.ac.ae/"],
    "country": "United Arab Emirates",
    "alpha_two_code": "AE",
    "state-province": "Abu Dhabi"
  },
  {
    "name": "Centro Universitário de Brasília, UNICEUB",
    "domains": ["sempreceub.com", "uniceub.br"],
    "web_pages": ["https://www.uniceub.br"],
    "country": "Brazil",
    "alpha_two_code": "BR",
    "state-province": null
  },
  {
    "name": "Kharkiv National University",
    "domains": ["student.karazin.ua", "karazin.ua", "univer.kharkov.ua"],
    "web_pages": ["https://karazin.ua", "http://www.univer.kharkov.ua/"],
    "country": "Ukraine",
    "alpha_two_code": "UA",
    "state-province": null
  },
  {
    "name": "Universidad Técnica Federico Santa María",
    "domains": ["usm.cl"],
    "web_pages": ["https://usm.cl"],
    "country": "Chile",
    "alpha_two_code": "CL",
    "state-province": null
  },
  {
    "name": "IÉSEG School of Management",
    "domains": ["ieseg.fr"],
    "web_pages": ["https://ieseg.fr"],
    "country": "France",
    "alpha_two_code": "FR",
    "state-province": null
  },
  {
    "name": "Sun Yat-Sen University",
    "domains": ["mail2.sysu.edu.cn", "mail.sysu.edu.cn"],
    "web_pages": ["https://sysu.edu.cn"],
    "country": "China",
    "alpha_two_code": "CN",
    "state-province": null
  },
  {
    "name": "Royal Holloway University of London",
    "domains": ["rhul.ac.uk"],
    "web_pages": ["https://rhul.ac.uk"],
    "country": "United Kingdom",
    "alpha_two_code": "GB",
    "state-province": null
  },
  {
    "name": "Hunan University",
    "domains": ["hnu.edu.cn", "www-en.hnu.edu.cn"],
    "web_pages": ["https://www.hnu.edu.cn", "http://www-en.hnu.edu.cn"],
    "country": "China",
    "alpha_two_code": "CN",
    "state-province": null
  },
  {
    "name": "University of Portsmouth",
    "domains": ["port.ac.uk", "myport.ac.uk", "myport.port.ac.uk"],
    "web_pages": ["http://www.port.ac.uk/", "https://myport.port.ac.uk"],
    "country": "United Kingdom",
    "alpha_two_code": "GB",
    "state-province": null
  },
  {
    "web_pages": ["https://www.ac-paris.fr/"],
    "name": "Académie de Paris",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": ["ac-paris.fr"],
    "country": "France"
  },
  {
    "web_pages": ["https://www.ac-aix-marseille.fr/"],
    "name": "Académie d'Aix-Marseille",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": ["ac-aix-marseille.fr"],
    "country": "France"
  },
  {
    "web_pages": ["https://www.ac-creteil.fr/"],
    "name": "Académie de Créteil",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": ["ac-creteil.fr"],
    "country": "France"
  },
  {
    "web_pages": ["http://www.marywood.edu"],
    "name": "Marywood University",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["marywood.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://www.upes.ac.in/"],
    "name": "University of Petroleum and Energy Studies",
    "alpha_two_code": "IN",
    "state-province": "Dehradun",
    "domains": ["upes.ac.in"],
    "country": "India"
  },
  {
    "web_pages": ["https://www.ashoka.edu.in"],
    "name": "Ashoka University",
    "alpha_two_code": "IN",
    "state-province": "Haryana",
    "domains": ["ashoka.edu.in"],
    "country": "India"
  },
  {
    "web_pages": ["https://www.iiits.ac.in/"],
    "name": "Indian Institute of Information Technology Sri City",
    "alpha_two_code": "IN",
    "state-province": "Chittoor",
    "domains": ["iiits.in"],
    "country": "India"
  },
  {
    "web_pages": ["https://www.cstj.qc.ca", "https://ccmt.cstj.qc.ca", "https://ccml.cstj.qc.ca"],
    "name": "Cégep de Saint-Jérôme",
    "alpha_two_code": "CA",
    "state-province": "Quebec",
    "domains": ["cstj.qc.ca"],
    "country": "Canada"
  },
  {
    "web_pages": ["http://www.lindenwood.edu/"],
    "name": "Lindenwood University",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["lindenwood.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["http://www.davietjal.org/"],
    "name": "DAV Institute of Engineering & Technology",
    "alpha_two_code": "IN",
    "state-province": "Punjab",
    "domains": ["davietjal.org"],
    "country": "India"
  },
  {
    "web_pages": ["http://www.lpu.in/"],
    "name": "Lovely Professional University",
    "alpha_two_code": "IN",
    "state-province": "Punjab",
    "domains": ["lpu.in"],
    "country": "India"
  },
  {
    "web_pages": ["https://sullivan.edu/"],
    "name": "Sullivan University",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["sullivan.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://www.fscj.edu/"],
    "name": "Florida State College at Jacksonville",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["fscj.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://www.xavier.edu/"],
    "name": "Xavier University",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["xavier.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://home.tusculum.edu/"],
    "name": "Tusculum College",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["tusculum.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://cst.edu/"],
    "name": "Claremont School of Theology",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["cst.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://somaiya.edu/"],
    "name": "Somaiya Vidyavihar",
    "alpha_two_code": "IN",
    "state-province": null,
    "domains": ["somaiya.edu"],
    "country": "India"
  },
  {
    "web_pages": ["https://www.columbiasc.edu/"],
    "name": "Columbia College (SC)",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["columbiasc.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["http://www.clpccd.edu/"],
    "name": "Chabot-Las Positas Community College District",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["clpccd.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://www.keller.edu/"],
    "name": "Keller Graduate School of Management",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["keller.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://monroecollege.edu/"],
    "name": "Monroe College",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["monroecollege.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://smccd.edu/"],
    "name": "San Mateo County Community College District",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["smccd.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["http://losrios.edu/"],
    "name": "Los Rios Community College District",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["losrios.edu"],
    "country": "United States"
  },
  {
    "web_pages": ["https://www.digipen.edu/"],
    "name": "DigiPen Institute of Technology",
    "alpha_two_code": "US",
    "state-province": null,
    "domains": ["digipen.edu"],
    "country": "United States"
  }
];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    try {
      // making it case insensitive for better results
      const filteredData = data.filter((item) =>
        item.country.toLowerCase().includes(query.toLowerCase())
      );
      setSearchData(filteredData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <input
          style={{
            width: "25vw",
            height: "5vh",
            border: "1px solid black",
            borderRadius: "10px",
            margin: "2px",
            padding: "2px",
          }}
          placeholder="Search your desired Country"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {searchData.map((x) => (
          <li key={x.name}>
            <UniCard
              name={x.name}
              webPages={x.web_pages}
              country={x.country}
              stateProvince={x.state_province}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchBar;
