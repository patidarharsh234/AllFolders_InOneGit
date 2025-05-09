package com.rays.lazy_eager;

import java.util.Iterator;
import java.util.Set;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;

import com.rays.auction.Auction;
import com.rays.auction.Bid;

public class TestLazy_Eager {

	public static void main(String[] args) {

		SessionFactory sf = new Configuration().configure().buildSessionFactory();

		Session sess = sf.openSession();
		Auction items = (Auction) sess.get(Auction.class, 1L);
		System.out.println(items.getDescription());
		System.out.println(items.getId());
		
		
	//lazy condition me lazy="true" -Auction.hbm.xml me hota he-->esme sirf Auction ki query run 
        //query=two tiems query chala
		//1 st query :-select ID, DESCRIPTION from AUCTION where ID=?
	//..>Hibernate: select auction0_.ID as ID1_0_, auction0_.DESCRIPTION as DESCRIPT2_1_0_ from AUCTION auction0_ where auction0_.ID=?	
		//then Set s = items.getBids(); es liyn pr secound query.
		//2 nd query :-select * from BID where ITEME_ID=?


		//Lazy condition me likhna pada link tabel ke data ko get karvana ke liye:-->items.getBids();
	//tabhi link table ki query run hoti.	
			
	/*	Set s = items.getBids(); 
		Iterator it = s.iterator();
		while (it.hasNext()) {
			Bid bid = (Bid) it.next();
			System.out.println(bid.getId());
			System.out.println(bid.getAmount());
			System.out.println(bid.getTimeStamp());
			System.out.println(bid.getItemId()); 
			}   */
		 
		
		//eager condition me lazy="true" replace from fetch="joint"--Auiction.hbm.xml file me
		//eager condition me autometicaly link table data ko bhi sath me lane ke liye join query chla kr get kr leta he data 
//query= join query chli(query run only one time)..>	Hibernate: select auction0_.ID as ID1_1_, auction0_.DESCRIPTION as DESCRIPT2_1_1_, bids1_.ITEME_ID as ITEME4_3_, bids1_.ID as ID3_, bids1_.ID as ID0_0_, bids1_.AMOUNT as AMOUNT0_0_, bids1_.TIMESTAMP as TIMESTAMP0_0_ from AUCTION auction0_ left outer join BID bids1_ on auction0_.ID=bids1_.ITEME_ID where auction0_.ID=?	
	        
		/*	Set s = items.getBids();  // eske phle hi auction ko get krenge tabhi join query chla dega
		Iterator it = s.iterator();
		while (it.hasNext()) {
			Bid bid = (Bid) it.next();
			System.out.println(bid.getId());
			System.out.println(bid.getAmount());
			System.out.println(bid.getTimeStamp());
			System.out.println(bid.getItemId()); 
			}   */
		
		
		
	   sess.close();

	}

}
